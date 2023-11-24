function theImitationGame(arr) {

    let message = arr.shift();
    let index = 0;

    while (arr[index] != "Decode") {
        let commandArr = arr[index].split("|");
        if (commandArr.includes("Move")) {
            let commandIndex = Number(commandArr[1]);
            let firstPart = message.substring(0, commandIndex);
            let secondPart = message.substring(commandIndex);
            message = secondPart + firstPart;
        } else if (commandArr.includes("Insert")) {
            let indexCommand = Number(commandArr[1]);
            let value = commandArr[2];
            let firstPart = message.substring(0, indexCommand);
            let secondPart = message.substring(indexCommand);
            message = firstPart + value + secondPart;
        } else if (commandArr.includes("ChangeAll")) {
            message = message.split(commandArr[1]).join(commandArr[2]);
        }
        index++;
    }
    console.log(`The decrypted message is: ${message}`);
}
theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode',]);
// theImitationGame(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode']);