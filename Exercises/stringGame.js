function stringGame(arr) {

    let message = arr.shift();
    let command = arr.shift();

    while (command != "Done") {
        let commandArr = command.split(" ");
        if (commandArr.includes("Change")) {
            message = message.split(Number(commandArr[1])).join(commandArr[2]);
            console.log(message);
        } else if (commandArr.includes("Includes")) {
            let substring = commandArr[1];
            let result = message.includes(substring) ? "True" : "False";
            console.log(result);
        } else if (commandArr.includes("End")) {
            let substring = commandArr[1];
            let result = message.endsWith(substring) ? "True" : "False";
            console.log(result);
        } else if (commandArr.includes("Uppercase")) {
            message = message.toUpperCase();
            console.log(message);
        } else if (commandArr.includes("FindIndex")) {
            let char = commandArr[1];
            let index = message.indexOf(char);
            console.log(index);
        } else if (commandArr.includes("Cut")) {
            let startIndex = Number(commandArr[1]);
            let count = Number(commandArr[2]);
            message = message.slice(startIndex, count + startIndex);
            console.log(message);
        }
        command = arr.shift();
    }
}
// stringGame(["//Th1s 1s my str1ng!//", "Change 1 i", "Includes string", "End my", "Uppercase", "FindIndex I", "Cut 5 5", "Done"]);
stringGame(["*S0ftUni is the B3St Plac3**", "Change 2 o", "Includes best", "End is", "Uppercase", "FindIndex P", "Cut 3 7", "Done"]);