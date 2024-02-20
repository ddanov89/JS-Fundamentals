function counterStrike(arr) {
    
    let energy = Number(arr[0]);
    let index = 1;
    let command = Number(arr[index]);
    let battlesCount = 0;
    let isEnoughEnergy = true;

    while (command != "End of battle") {
        if (energy >= command) {
            battlesCount++;
            energy -= command;
        } else {
            isEnoughEnergy = false;
            break;
        }
        if (index % 3 == 0) {
            energy += battlesCount;
        }
        index++;
        command = arr[index];
    }
    if (isEnoughEnergy) {
        console.log(`Won battles: ${battlesCount}. Energy left: ${energy}`);
    } else {
        console.log(`Not enough energy! Game ends with ${battlesCount} won battles and ${energy} energy`);
    }
}
// counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);