function heroesOfCodeAndLogic(arr) {

    let commands = {
        Heal,
        Recharge,
        CastSpell,
        TakeDamage,
    }

    let numberOfHeroes = Number(arr.shift());
    let party = {};

    for (let i = 0; i < numberOfHeroes; i++) {
        let heroData = arr.shift();
        createHero(heroData);
    }
    while (arr[0] != "End") {
        let tokens = arr.shift().split(" - ");
        let name = tokens[1];
        let hero = party[name];

        commands[tokens[0]](name, hero, tokens);
    }
    for (let name in party) {
        let hero = party[name];
        console.log(name);
        console.log(`   HP: ${hero.hp}`);
        console.log(`   MP: ${hero.mp}`);
    }

    function createHero(heroData) {
        let [name, hp, mp] = heroData.split(" ");
        let hero = {
            hp: Number(hp),
            mp: Number(mp),
        };
        party[name] = hero;
    }

    function Heal(name, hero, tokens) {
        let hpToRestore = Number(tokens[2]);
        if (hpToRestore + hero.hp > 100) {
            hpToRestore = 100 - hero.hp;
        }
        hero.hp += hpToRestore;
        console.log(`${name} healed for ${hpToRestore} HP!`);
    }
    function Recharge(name, hero, tokens) {
        let mpToRestore = Number(tokens[2]);
        if (mpToRestore + hero.mp > 200) {
            mpToRestore = 200 - hero.mp;
        }
        hero.mp += mpToRestore;
        console.log(`${name} recharged for ${mpToRestore} MP!`);
    }

    function CastSpell(name, hero, tokens) {
        let mpCost = Number(tokens[2]);
        let spellName = tokens[3];
        if (hero.mp >= mpCost) {
            hero.mp -= mpCost;
            console.log(`${name} has successfully cast ${spellName} and now has ${hero.mp} MP!`);
        } else {
            console.log(`${name} does not have enough MP to cast ${spellName}!`);
        }
    }

    function TakeDamage(name, hero, tokens) {
        let damage = Number(tokens[2]);
        let attacker = tokens[3];
        hero.hp -= damage;
        if (hero.hp > 0) {
            console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`);
        } else {
            console.log(`${name} has been killed by ${attacker}!`);
            delete party[name];
        }
    }
}
// heroesOfCodeAndLogic(["2", "Solmyr 85 120", "Kyrre 99 50", "Heal - Solmyr - 10", "Recharge - Solmyr - 50", "TakeDamage - Kyrre - 66 - Orc", "CastSpell - Kyrre - 15 - ViewEarth", "End"]);
heroesOfCodeAndLogic(["4", "Adela 90 150", "SirMullich 70 40", "Ivor 1 111", "Tyris 94 61", "Heal - SirMullich - 50", "Recharge - Adela - 100", "CastSpell - Tyris - 1000 - Fireball", "TakeDamage - Tyris - 99 - Fireball", "TakeDamage - Ivor - 3 - Mosquito", "End"]);