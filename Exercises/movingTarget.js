function movingTarget(arr) {
    
    let targetSequence = arr
    .shift()
    .split(" ")
    .map(Number);
    
    for (let command of arr) {
        if (command == "End") {
            break;
        }
        let element = command.split(" ");
        let action = element.shift();
        let index = Number(element.shift());
        let power = Number(element.shift());
        switch (action) {
            case "Shoot":
            if (index >= 0 && index < targetSequence.length) {
                targetSequence[index] -= power;
            }
            if (targetSequence[index] <= 0) {
                targetSequence.splice(index, 1);
            }
            break;
            case "Add": 
            if (index >= 0 && index < targetSequence.length) {
                targetSequence.splice(index, 0, power);
            }else {
                console.log("Invalid placement!");
            }
            break;
            case "Strike": 
            if (index < targetSequence.length && (index - power) >= 0 && (index + power) < targetSequence.length) {
                targetSequence.splice(index - power, 1 + power * 2);
            }else {
                console.log("Strike missed!");
            }
            break;
        }
    }
    console.log(targetSequence.join("|"));
}
movingTarget(["52 74 23 44 96 110", "Shoot 5 10","Shoot 1 80","Strike 2 1","Add 22 3","End"]);
// movingTarget(["1 2 3 4 5", "Strike 0 1","End"]);