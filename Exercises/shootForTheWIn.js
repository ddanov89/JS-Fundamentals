function shootForTheWin(arr) {

    let target = arr
    .shift()
    .split(" ")
    .map(Number);

    let targetCount = 0;
    let command = arr.shift();

    while (command !== "End") {
        command = Number.parseInt(command);
 
        if (command >= 0 && command < target.length) {
            for (let i = 0; i < target.length; i++) {
                let currentTarget = target[command];
        
                if (i !== command && target[i] !== -1) {
                    if (target[i] > currentTarget) {
                        target[i] -= currentTarget;
                    } else {
                        target[i] += currentTarget;
                    }
                }
            }
 
            target[command] = -1;
           targetCount++;
        }
 
        command = arr.shift();
    }
    console.log(`Shot targets: ${targetCount} -> ${target.join(" ")}`);
}
shootForTheWin(["24 50 36 70","0","4","3","1","End"]);
// shootForTheWin(["30 30 12 60 54 66", "5","2","4", "0", "End"]);