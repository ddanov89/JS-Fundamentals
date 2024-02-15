function friendListMaintenance(arr) {

    let friendList = arr.shift().split(", ");
    let blacklistedCount = 0;
    let lostCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");
        if (command == "Report") {
            break;
        }else if(command[0] == "Blacklist"){
            if (friendList.includes(command[1])) {
                let blacklistedIndex = friendList.indexOf(command[1]);
                friendList[blacklistedIndex] = "Blacklisted";
                blacklistedCount++;
                console.log(`${command[1]} was blacklisted.`);
            } else {
                console.log(`${command[1]} was not found.`);
            }
        }else if (command[0] == "Error") {
            if (command[1] >= 0 && command[1] < friendList.length && friendList[command[1]] != "Blacklisted" && friendList[command[1]] != "Lost") {
                let originalName = friendList[command[1]];
                friendList[command[1]] = "Lost";
                lostCount++;
                console.log(`${originalName} was lost due to an error.`);
            }
        }else if (command[0] == "Change") {
            if (command[1] >= 0 && command[1] < friendList.length) {  
                let originalName = friendList[command[1]];
                friendList[command[1]] = command[2];
                console.log(`${originalName} changed his username to ${command[2]}.`);
            }
        }
    }
    console.log(`Blacklisted names: ${blacklistedCount} `);
    console.log(`Lost names: ${lostCount}`);
    console.log(friendList.join(" "));
}
// friendListMaintenance(["Mike, John, Eddie", "Blacklist Mike","Error 0", "Report"]);
friendListMaintenance(["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"]);
// friendListMaintenance(["Mike, John, Eddie, William", "Blacklist Maya", "Error 1", "Change 4 George", "Report"]);