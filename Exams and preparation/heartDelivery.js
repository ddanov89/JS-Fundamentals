function heartDelivery(arr) {

    let neighborhood = arr
        .shift()
        .split("@")
        .map(Number);

    let command = arr.shift();
    let index = 0;

    while (command !== "Love!") {

        let heartsNeeded = command.split(" ");
        let jumpAction = heartsNeeded.shift();
        let lengthOfJump = Number(heartsNeeded.shift());

        index += lengthOfJump;

        if (index > neighborhood.length - 1) {
            index = 0;
        }
        if (neighborhood[index] !== 0) {
            neighborhood[index] -= 2;
            if (neighborhood[index] == 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${index} already had Valentine's day.`);
        }
        command = arr.shift();
    }
    console.log(`Cupid\'s last position was ${index}.`);

    let isSuccessful = true;
    
    for (let house of neighborhood) {
        if (house !== 0) {
            isSuccessful = false;
            break;
        }
    }
    if (isSuccessful) {
        console.log('Mission was successful.');
    } else {
        let count = 0;
        for (let house of neighborhood) {
            if (house != 0) {
                count++;
            }
        }
        console.log(`Cupid has failed ${count} places.`);
    }
}
// heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);
heartDelivery(["10@10@10@2", "Jump 1","Jump 2","Love!"]);