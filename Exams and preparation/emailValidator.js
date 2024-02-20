function emailValidator(arr) {
    let email = arr.shift();
    let index = 0;
    while (arr[index] != "Complete") {
        let commandArr = arr[index].split(" ");
        if (commandArr.includes("Upper")) {
            email = email.toUpperCase();
            console.log(email);
        } else if (commandArr.includes("Lower")) {
            email = email.toLowerCase();
            console.log(email);
        } else if (commandArr.includes("GetDomain")) {
            let index = Number(commandArr[1]);
            let neededPart = email.substring(email.length - index);
            console.log(neededPart);
        } else if (commandArr.includes("GetUsername")) {
            if (!email.includes("@")) {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            } else {
                let index = email.indexOf("@");
                let neededPart = email.substring(0, index);
                console.log(neededPart);
            }
        } else if (commandArr.includes("Replace")) {
            let replacement = commandArr[1];
            email = email.split(replacement).join("-");
            console.log(email);
        } else if (commandArr.includes("Encrypt")){
            email = email.split("").map(element => element.charCodeAt()).join(" ");
            console.log(email);
        }
        index++;
    }
}
// emailValidator(["Mike123@somemail.com", "Make Upper", "GetDomain 3", "GetUsername", "Encrypt", "Complete"]);
emailValidator(["AnotherMail.com", "Make Lower", "GetUsername", "Replace a", "Complete"]);