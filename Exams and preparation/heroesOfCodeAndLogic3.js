function heroesOfCodeAndLogic(arr) {

    class Hero {
        name;
        hp;
        mp;

        constructor(name, hp, mp) {
            this.name = name;
            this.hp = Number(hp);
            this.mp = Number(mp);
        }

        Heal(tokens) {
            let hpToRestore = Number(tokens[2]);
            if (hpToRestore + this.hp > 100) {
                hpToRestore = 100 - this.hp;
            }
            this.hp += hpToRestore;
            console.log(`${this.name} healed for ${hpToRestore} HP!`);
        }
        Recharge(tokens) {
            let mpToRestore = Number(tokens[2]);
            if (mpToRestore + this.mp > 200) {
                mpToRestore = 200 - this.mp;
            }
            this.mp += mpToRestore;
            console.log(`${this.name} recharged for ${mpToRestore} MP!`);
        }
        CastSpell(tokens) {
            let mpCost = Number(tokens[2]);
            let spellName = tokens[3];
            if (this.mp >= mpCost) {
                this.mp -= mpCost;
                console.log(`${this.name} has successfully cast ${spellName} and now has ${this.mp} MP!`);
            } else {
                console.log(`${this.name} does not have enough MP to cast ${spellName}!`);
            }
        }
        TakeDamage(tokens) {
            let damage = Number(tokens[2]);
            let attacker = tokens[3];
            this.hp -= damage;
            if (this.hp > 0) {
                console.log(`${this.name} was hit for ${damage} HP by ${attacker} and now has ${this.hp} HP left!`);
            } else {
                console.log(`${this.name} has been killed by ${attacker}!`);
                delete party[this.name];
            }
        }
    }

    let numberOfHeroes = Number(arr.shift());
    let party = {};

    for (let i = 0; i < numberOfHeroes; i++) {
        let [name, hp, mp] = arr.shift().split(" ");
        party[name] = new Hero(name, hp, mp);
    }

    while (arr[0] != "End") {
        let tokens = arr.shift().split(" - ");
        let name = tokens[1];
        let hero = party[name];
        hero[tokens[0]](tokens);
    }

    for (let name in party) {
        let hero = party[name];
        console.log(name);
        console.log(`   HP: ${hero.hp}`);
        console.log(`   MP: ${hero.mp}`);
    }
}
// heroesOfCodeAndLogic(["2", "Solmyr 85 120", "Kyrre 99 50", "Heal - Solmyr - 10", "Recharge - Solmyr - 50", "TakeDamage - Kyrre - 66 - Orc", "CastSpell - Kyrre - 15 - ViewEarth", "End"]);
heroesOfCodeAndLogic(["4", "Adela 90 150", "SirMullich 70 40", "Ivor 1 111", "Tyris 94 61", "Heal - SirMullich - 50", "Recharge - Adela - 100", "CastSpell - Tyris - 1000 - Fireball", "TakeDamage - Tyris - 99 - Fireball", "TakeDamage - Ivor - 3 - Mosquito", "End"]);