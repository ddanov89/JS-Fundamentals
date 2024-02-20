function dungeonestDark(array) {
    let roomsInfo = array[0];
    let rooms = roomsInfo.split("|");
    let health = 100;
    let coins = 0;
    let bestRoom = 1;
    for (let room of rooms) {
        let tokens = room.split(' ');
        let command = tokens[0];
        let num = Number(tokens[1]);
        if (command == "potion") {
            let newHP = health + num <= 100 ? num : 100 - health;
            health += newHP;
            console.log(`You healed for ${newHP} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command == "chest") {
            coins += num;
            console.log(`You found ${num} coins.`);
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`YOu died! Killed by ${command}.`);
                break;
                console.log(`Best room: ${bestRoom}`);
            }
        }
        bestRoom++;
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);