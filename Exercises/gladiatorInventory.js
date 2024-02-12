function inventory(input) {

    let inventory = input.shift().split(' ');
    for (let commands of input) {
        let tokens = commands.split(' ')
        let item = tokens[1];

        switch (tokens[0]) {
            case "Buy":
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;

            case "Trash":
                if (inventory.includes(item)) {
                    let index = inventory.indexOf(item);
                    inventory.splice(index, 1);
                }
                break;

            case "Repair":
                if (inventory.includes(item)) {
                    let index = inventory.indexOf(item);
                    inventory.splice(index, 1)
                    inventory.push(item)
                }
                break;

            case "Upgrade":
                let weaponUpgrade = item.split('-')
                let weapon = weaponUpgrade[0]
                let upgrade = weaponUpgrade[1]

                if (inventory.includes(weapon)) {
                    let index = inventory.indexOf(weapon);
                    inventory.splice(index + 1, 0, `${weapon}:${upgrade}`)
                }
        }
    }
    console.log(inventory.join(' '))
}