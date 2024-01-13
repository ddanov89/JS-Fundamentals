function registration(arr) {
    let username = arr.shift();
    let command = arr.shift();

    while (command != "Registration") {
        let commandArr = command.split(" ");
        if (commandArr[0] == "Letters") {
            if (commandArr[1] == "Upper") {
                username = username.toUpperCase();
            } else if (commandArr[1] == "Lower") {
                username = username.toLowerCase();
            }
            console.log(username);
        } else if (commandArr[0] == "Reverse") {
            let startIndex = Number(commandArr[1]);
            let endIndex = Number(commandArr[2]);
            if ((startIndex >= 0 && startIndex < username.length) && (endIndex >= 0 && endIndex < username.length) && startIndex < endIndex) {
                let reversed = username.substring(startIndex, endIndex + 1).split("").reverse().join("");
                console.log(reversed);
            }
        } else if (commandArr[0] == "Substring") {
            let substring = commandArr[1];
            if (!username.includes(substring)) {
                console.log(`The username ${username} doesn't contain ${substring}.`);
            } else {
                let modified = username.replace(substring, "");
                console.log(modified);
            }
        } else if (commandArr[0] == "Replace") {
            let replacement = commandArr[1];
            username = username.split(replacement).join("-");
            console.log(username);
        } else if (commandArr[0] == "IsValid") {
            let char = commandArr[1];
            if (username.includes(char)) {
                console.log("Valid username");
            } else {
                console.log(`${char} must be contained in your username.`);
            }
        }
        command = arr.shift();
    }
}
registration(["John", "Letters Lower", "Substring SA", "IsValid @", "Registration"]);
// registration(["ThisIsSoftUni", "Reverse 1 3", "Replace S", "Substring hi", "Registration"]);