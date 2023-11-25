function worldTourProblem(arr) {

    let destination = arr.shift();
    let index = 0;

    while (arr[index] != "Travel") {
        let commandArr = arr[index].split(":");
        if (commandArr.includes("Add Stop")) {
            let indexCommand = Number(commandArr[1]);
            let value = commandArr[2];
            if (indexCommand >= 0 || indexCommand < commandArr.length) {
                let firstPart = destination.slice(0, indexCommand);
                let secondPart = destination.slice(indexCommand);
                destination = firstPart + value + secondPart;
                console.log(destination);
            }
        } else if (commandArr.includes("Remove Stop")){
            let startIndex = Number(commandArr[1]);
            let endIndex = Number(commandArr[2]);
            if (startIndex < destination.length && startIndex >= 0 
                && endIndex < destination.length && endIndex >= 0) {
                let split = destination.substring(startIndex, endIndex + 1);
                destination = destination.replace(split, "");
            }
            console.log(destination);
        }else if (commandArr.includes("Switch")) {
            if (destination.includes(commandArr[1])) {
                destination = destination.split(commandArr[1]).join(commandArr[2]);
                console.log(destination);
            }
        }
            index++;
    }
    console.log(`Ready for world tour! Planned stops: ${destination}`);
}
worldTourProblem(["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"]);
// worldTourProblem(["Albania:Bulgaria:Cyprus:Deuchland", "Add Stop:3:Nigeria", "Remove Stop:4:8", "Switch:Albania: Azərbaycan", "Travel"]);