function armies(arr) {

    let leaders = [];

    for (let tokens of arr) {
        let army = "army";
        let totalArmyCount = "totalArmyCount";
        if (tokens.includes(" arrives")) {
            let leaderName = tokens.split(" arrives")[0];
            let leader = {
                name: leaderName,
                army: new Map(),
                totalArmyCount: 0,
            };
            leaders.push(leader);
        } else if (tokens.includes(":")) {
            let leaderInfo = tokens.split(": ");
            for (let leader of leaders) {
                if (leader.name == leaderInfo[0]) {
                    let armyInfo = leaderInfo[1].split(", ");
                    leader[army].set(armyInfo[0], Number(armyInfo[1]));
                    leader.totalArmyCount += Number(armyInfo[1]);
                }
            }
        } else if (tokens.includes("+")) {
            let armyInfo = tokens.split(" + ");
            for (let leader of leaders) {
                if (leader.army.has(armyInfo[0])) {
                    leader.army.set(armyInfo[0], leader.army.get(armyInfo[0]) + Number(armyInfo[1]));
                    leader.totalArmyCount += Number(armyInfo[1]);
                }
            }
        } else if (tokens.includes(" defeated")) {
            let leaderName = tokens.split(" defeated")[0];
            for (let leader of leaders) {
                if (leader.name == leaderName) {
                    let index = leaders.indexOf(leader);
                    leaders.splice(index, 1);
                }
            }
        }
    }
    leaders = leaders.sort((a, b) => b.totalArmyCount - a.totalArmyCount);
    for (let leader of leaders) {
        console.log(`${leader.name}: ${leader.totalArmyCount}`);
        let sortedArr = Array.from(leader.army.entries()).sort((a, b) => b[1] - a[1]);
        for (let entry of sortedArr) {
            console.log(`>>> ${entry[0]} - ${entry[1]}`);
        }
    }
}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);
// armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);