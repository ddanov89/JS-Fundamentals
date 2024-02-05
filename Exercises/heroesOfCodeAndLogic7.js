function heroesOfCodeAndLogic(arr) {

    let numberOfHeroes = Number(arr.shift());
    let endCommand = arr.pop();

    let heroes = new Map();

    for (let i = 0; i < numberOfHeroes; i++) {
        let [name, hp, mp] = arr.shift().split(" ");

        let hero = {
            name: name,
            hp: Number(hp),
            mp: Number(mp),
        };
        heroes.set(name, hero);
    }
    for (let tokens of arr) {
    
        let commandInfo = tokens.split(" - ");
        let hero = heroes.get(commandInfo[1]);
        if (commandInfo[0] == "CastSpell") {
            if (hero.mp >= Number(commandInfo[2])) {
                hero.mp -= Number(commandInfo[2]);
                console.log(`${commandInfo[1]} has successfully cast ${commandInfo[3]} and now has ${hero.mp} MP!`);
            } else {
                console.log(`${commandInfo[1]} does not have enough MP to cast ${commandInfo[3]}!`);
            }
        } else if (commandInfo[0] == "TakeDamage") {
            let remainingHP = hero.hp - commandInfo[2];
            hero.hp = remainingHP;
            if (hero.hp > 0) {
                console.log(`${commandInfo[1]} was hit for ${commandInfo[2]} HP by ${commandInfo[3]} and now has ${remainingHP} HP left!`);
            } else {
                heroes.delete(hero.name);
                console.log(`${commandInfo[1]} has been killed by ${commandInfo[3]}!`);
            }
        } else if (commandInfo[0] == "Recharge") {
            let remainingMP = 200 - hero.mp;
            if (commandInfo[2] > remainingMP) {
                console.log(`${commandInfo[1]} recharged for ${remainingMP} MP!`);    
                    hero.mp = 200;
            }else {
                console.log(`${commandInfo[1]} recharged for ${commandInfo[2]} MP!`);
                hero.mp += Number(commandInfo[2]);
            }
        } else if (commandInfo[0] == "Heal") {
            let newHP = 100 - hero.hp;
            if (commandInfo[2] > newHP) {
                console.log(`${commandInfo[1]} healed for ${newHP} HP!`);
                hero.hp = 100;
            }else {
                console.log(`${commandInfo[1]} healed for ${commandInfo[2]} HP!`);
                hero.hp += Number(commandInfo[2]);
            }
        }
    }
    for (let [name, hero] of heroes.entries()) {
        console.log(`${name}`);
        console.log(` HP: ${hero.hp}`);
        console.log(` MP: ${hero.mp}`);
    }
}
heroesOfCodeAndLogic(["2", "Solmyr 85 120", "Kyrre 99 50", "Heal - Solmyr - 10", "Recharge - Solmyr - 50", "TakeDamage - Kyrre - 66 - Orc", "CastSpell - Kyrre - 15 - ViewEarth", "End"]);
// heroesOfCodeAndLogic(["4", "Adela 90 150", "SirMullich 70 40", "Ivor 1 111", "Tyris 94 61", "Heal - SirMullich - 50", "Recharge - Adela - 100", "CastSpell - Tyris - 1000 - Fireball", "TakeDamage - Tyris - 99 - Fireball", "TakeDamage - Ivor - 3 - Mosquito", "End"]);