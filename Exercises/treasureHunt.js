function treasureHunt(arr) {

    let loot = arr.shift().split("|");
    let command = arr.shift();
    let totalGain = 0;

    while (command != "Yohoho!") {

        let tokens = command.split(" ");
        let action = tokens.shift();

        if (action == "Loot") {
            tokens.filter(item => !loot.includes(item)).forEach(item => loot.unshift(item));
            
        } else if (action == "Drop") {
            let index = Number(tokens.shift());
            if (index >= 0 && index < loot.length) {
                let removedItem = loot.splice(index, 1).shift();
                loot.push(removedItem);
            }
        } else if (action == "Steal") {
            let count = Number(tokens.shift());
            let stolenItems = loot.splice(-count);
            console.log(stolenItems.join(', '));
        }
        command = arr.shift();
    }
    if (loot.length == 0) {
        console.log("Failed treasure hunt.");
    }else {
        for (let item of loot) {
            totalGain += item.length;
         }
         let avgGain = totalGain / loot.length;
         console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]);
// treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);