function easter(arr) {
    let messageString = arr.shift();
    let command = arr.shift();

    while (command != "Easter") {
        let commandArr = command.split(" ");
        if (commandArr.includes("Replace")) {
            let currentChar = commandArr[1];
            let newChar = commandArr[2];
            messageString = messageString.split(currentChar).join(newChar);
            console.log(messageString);
        } else if (commandArr.includes("Remove")) {
            let substring = commandArr[1];
            messageString = messageString.split(substring).join('');
            console.log(messageString);
        } else if (commandArr.includes("Includes")) {
            let string = commandArr[1];
            if (messageString.includes(string)) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (commandArr.includes("Change")) {
            let cases = commandArr[1];
            switch (cases) {
                case "Upper":
                    messageString = messageString.toUpperCase();
                    break;
                case "Lower":
                    messageString = messageString.toLowerCase();
                    break;
            }
            console.log(messageString);
        } else if (commandArr.includes("Reverse")) {
            let startIndex = Number(commandArr[1]);
            let endIndex = Number(commandArr[2]);
            if ((startIndex >= 0 && startIndex < messageString.length) && endIndex >= 0 && endIndex < messageString.length) {
                let reversed = messageString.substring(startIndex, endIndex + 1).split("").reverse().join("");
                console.log(reversed);
            }
        }
        command = arr.shift();
    }
}
// easter(['EasteriEggsscomming', 'Replace i I', 'Remove Eggs', 'Remove commIng', 'Change Lower', 'Reverse 0 17', 'Easter']);
easter(['Easterbscomming', 'Replace b I', 'Remove commIng', 'Change Upper', 'Reverse 0 5', 'Easter']);