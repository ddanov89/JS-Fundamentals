function activationKeys(arr) {
    let key = arr.shift();
    let command = arr.shift();

    while (command != "Generate") {
        let commandArr = command.split(">>>");
        if (commandArr.includes("Contains")) {
            if (key.includes(commandArr[1])) {
                console.log(`${key} contains ${commandArr[1]}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (commandArr.includes("Flip")) {
            if (commandArr.includes("Upper")) {
                let startIndex = Number(commandArr[2]);
                let endIndex = Number(commandArr[3]);
                let firstPart = key.substring(0, startIndex);
                let middlePart = key.substring(startIndex, endIndex).toUpperCase();
                let secondPart = key.substring(endIndex);
                key = firstPart + middlePart + secondPart;
                console.log(key);
            } else if (commandArr.includes("Lower")) {
                let startIndex = Number(commandArr[2]);
                let endIndex = Number(commandArr[3]);
                let firstPart = key.substring(0, startIndex);
                let middlePart = key.substring(startIndex, endIndex).toLowerCase();
                let secondPart = key.substring(endIndex);
                key = firstPart + middlePart + secondPart;
                console.log(key);
            }
        } else if (commandArr.includes("Slice")) {
            let startIndex = Number(commandArr[1]);
            let endIndex = Number(commandArr[2]);
            let sliced = key.substring(startIndex, endIndex);
            key = key.replace(sliced, "");
            console.log(key);
        }
        command = arr.shift();
    }
    console.log(`Your activation key is: ${key}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz", "Slice>>>2>>>6", "Flip>>>Upper>>>3>>>14", "Flip>>>Lower>>>5>>>7", "Contains>>>def", "Contains>>>deF", "Generate"]);
// activationKeys(["134softsf5ftuni2020rockz42", "Slice>>>3>>>7", "Contains>>>-rock", "Contains>>>-uni-", "Contains>>>-rocks", "Flip>>>Upper>>>2>>>8", "Flip>>>Lower>>>5>>>11", "Generate"]);