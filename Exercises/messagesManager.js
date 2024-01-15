function messagesManager(arr) {
    let messageCapacity = Number(arr.shift());
    let user = {};
    let users = new Map();

    let command = arr.shift();
    while (command != "Statistics") {
        let commandInfo = command.split("=");
        if (commandInfo[0] == "Add") {
            let name = commandInfo[1];
            let sentCount = Number(commandInfo[2]);
            let receivedCount = Number(commandInfo[3]);
            if (!users.has(name)) {
            user = {
                name: name,
                sent: sentCount,
                received: receivedCount,
            };
            users.set(name, user);
            }
        } else if (commandInfo[0] == "Message") {
            let senderName = commandInfo[1];
            let receiverName = commandInfo[2];
            if (users.has(senderName) && users.has(receiverName)) {
                let sender = users.get(senderName);
                let receiver = users.get(receiverName);
                sender.sent++;
                receiver.received++;
                if (sender.sent + sender.received >= messageCapacity) {
                    console.log(`${sender.name} reached the capacity!`);
                    users.delete(senderName);
                }
                if (receiver.sent + receiver.received >= messageCapacity) {
                    console.log(`${receiver.name} reached the capacity!`);
                    users.delete(receiverName);
                }
            }
        } else if (commandInfo[0] == "Empty") {
            let userName = commandInfo[1];
            if (users.has(userName)) {
                users.delete(userName);
            }
            if (commandInfo[1] == "All") {
                users.clear();
            }
        }
        command = arr.shift();
    }
    console.log(`Users count: ${users.size}`);
    for (let [name, user] of users.entries()) {
        console.log(`${name} - ${user.sent + user.received}`);
    }
}
// messagesManager(["10", "Add=Berg=9=0", "Add=Kevin=0=0", "Message=Berg=Kevin", "Add=Mark=5=4", "Statistics"]);
messagesManager(["20", "Add=Mark=3=9", "Add=Berry=5=5", "Add=Clark=4=0", "Empty=Berry", "Add=Blake=9=3", "Add=Michael=3=9", "Add=Amy=9=9", "Message=Blake=Amy", "Message=Michael=Amy", "Statistics"]);
// messagesManager(["12", "Add=Bonnie=3=5", "Add=Johny=4=4", "Empty=All", "Add=Bonnie=3=3", "Statistics"]);