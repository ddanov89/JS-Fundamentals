function battleManager(arr) {

    let endCommand = arr.pop();
    let records = new Map();

    for (let tokens of arr) {
        let commandInfo = tokens.split(":");
        if (commandInfo[0] == "Add") {

            let name = commandInfo[1];
            let health = Number(commandInfo[2]);
            let energy = Number(commandInfo[3]);

            if (records.has(name)) {
                let record = records.get(name);
                record.health += health;
            } else {
                let record = {
                    name: name,
                    health: health,
                    energy: energy,
                };
                records.set(name, record);
            }
        } else if (commandInfo[0] == "Attack") {
            let attackerName = commandInfo[1];
            let defenderName = commandInfo[2];
            let damage = Number(commandInfo[3]);
            if (records.has(attackerName) && records.has(defenderName)) {
                let defenderRecord = records.get(defenderName);
                defenderRecord.health -= damage;
                let attackerRecord = records.get(attackerName);
                attackerRecord.energy -= 1;
                if (defenderRecord.health <= 0) {
                    console.log(`${defenderName} was disqualified!`);
                    records.delete(defenderName);
                }
                if (attackerRecord.energy <= 0) {
                    console.log(`${attackerName} was disqualified!`);
                    records.delete(attackerName);
                }
            }
        } else if (commandInfo[0] == "Delete") {
            let name = commandInfo[1];
            if (name == "All") {
                records.clear();
            } else {
                records.delete(name);
            }
        }
    }
    console.log(`People count: ${records.size}`);
    for (let [name, record] of records.entries()) {
        console.log(`${name} - ${record.health} - ${record.energy}`);
    }
}
// battleManager(["Add:Mark:1000:5", "Add:Clark:1000:2", "Attack:Clark:Mark:500", "Attack:Clark:Mark:800", "Add:Charlie:4000:10", "Results"]);
// battleManager(["Add:Bonnie:3000:5", "Add:Kent:10000:10", "Add:Johny:4000:10", "Attack:Johny:Bonnie:400", "Add:Johny:3000:5", "Add:Peter:7000:1", "Delete:Kent", "Results"]);
battleManager(["Add:Bonnie:3000:5", "Add:Johny:4000:10", "Delete:All", "Add:Bonnie:3333:3", "Add:Aleks:1000:70", "Add:Tom:4000:1", "Results"]);