function secretChat(arr) {
    let message = arr.shift();

    let index = 0;
    while (arr[index] != "Reveal") {
        let commandArr = arr[index].split(":|:");
        if (commandArr.includes("ChangeAll")) {
            message = message.split(commandArr[1]).join(commandArr[2]);
            console.log(message);
        } else if (commandArr.includes("Reverse")) {
            if (message.includes(commandArr[1])) {
                message = message.replace(commandArr[1], "")
                let reversed = commandArr[1].split("").reverse().join("");
                message = message + reversed;
                console.log(message);
            } else {
                console.log("error");
            }
        } else if (commandArr.includes("InsertSpace")) {
            let indexCommand = Number(commandArr[1]);
            message = message.slice(0, indexCommand) + " " + message.slice(indexCommand);
            console.log(message);
        }
        index++;
    }
    console.log(`You have a new text message: ${message}`);
}
secretChat(['heVVodar!gniV', 'ChangeAll:|:V:|:l', 'Reverse:|:!gnil', 'InsertSpace:|:5', 'Reveal']);
// secretChat(['Hiware?uiy','ChangeAll:|:i:|:o', 'Reverse:|:?uoy','Reverse:|:jd', 'InsertSpace:|:3', 'InsertSpace:|:7', 'Reveal']);