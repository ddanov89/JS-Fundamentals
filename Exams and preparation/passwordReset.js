function passwordReset(arr) {

    let password = arr.shift();
    let command = arr.shift();

    while (command != "Done") {
        if (command.includes("TakeOdd")) {
            let newPassword = "";
            for (let i = 1; i < password.length; i += 2) {
                newPassword += password[i];
            }
            password = newPassword;
            console.log(password);
        } else if (command.includes("Cut")) {
            let commandArr = command.split(" ");
            let index = Number(commandArr[1]);
            let length = Number(commandArr[2]);
            let cut = password.substring(index, index + length);
            password = password.replace(cut, "");
            console.log(password);
        } else if (command.includes("Substitute")) {
            let commandArr = command.split(" ");
            let substring = commandArr[1];
            let substitute = commandArr[2];
            if (password.includes(substring)) {
                password = password.split(substring).join(substitute);
                console.log(password);
            } else {
                console.log("Nothing to replace!");
            }
        }
        command = arr.shift();
    }
    console.log(`Your password is: ${password}`);
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", "TakeOdd", "Cut 15 3", "Substitute :: -", "Substitute | ^", "Done"]);
// passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy", "TakeOdd", "Cut 18 2", "Substitute ! ***", "Substitute ? .!.", "Done"]);