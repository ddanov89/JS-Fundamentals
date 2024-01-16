function messageTranslator(arr) {
    let numberOfMessages = Number(arr.shift());

    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]/g;

    for (let i = 0; i < numberOfMessages; i++) {
        let matches = pattern.exec(arr[i]);
        if (matches == null) {
            console.log("The message is invalid");
        } else {
            let { command, message } = matches.groups;
            let newMessage = message.split("")
            .map(element => element.charCodeAt());
            console.log(`${command}: ${newMessage.join(" ")}`);
        }
    }
}
// messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"]);
messageTranslator(["3", "go:[outside]", "!drive!:YourCarToACarWash", "!Watch!:[LordofTheRings]"]);