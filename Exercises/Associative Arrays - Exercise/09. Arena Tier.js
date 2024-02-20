function arenaTier(arr) {
    let arena = {};
    let totalSkills = {};


    for (let line of arr) {
        if (line === 'Ave Cesar') {
            break;
        } else {
            let [gladiator, technique, skill] = line.split(' -> ');
            skill = Number(skill);

            if (technique !== undefined) {
                if (!arena[gladiator]) {
                    arena[gladiator] = {};
                    arena[gladiator][technique] = skill;
                } else {
                    if (!arena[gladiator][technique]) {
                        arena[gladiator][technique] = skill;
                    } else {
                        if (arena[gladiator][technique] < skill) {
                            arena[gladiator][technique] = skill;
                        }
                    }
                }
                getTotalSkills()

            } else {
                let [firstName, secondName] = gladiator.split(' vs ');
                if (arena.hasOwnProperty(firstName) && arena.hasOwnProperty(secondName)) {
                    let battleWin = false;
                    for (let techniques of Object.entries(arena[firstName])) {
                        for (let techniquesTwo of Object.entries(arena[secondName])) {

                            if (techniquesTwo[0] === techniques[0]) {

                                if (getTotalSkills(secondName) > getTotalSkills(firstName)) {
                                    delete totalSkills[firstName];
                                    delete arena[firstName];
                                    battleWin = true;
                                    break;
                                } else if (getTotalSkills(secondName) < getTotalSkills(firstName)) {
                                    delete totalSkills[secondName];
                                    delete arena[secondName];
                                    battleWin = true;
                                    break;
                                }
                            }
                        }
                        if (battleWin) {
                            break;
                        }
                    }
                }
            }
        }
    }

    function getTotalSkills(name) {

        for (let gladiator of Object.entries(arena)) {
            let sumOfSkills = 0;
            for (let technique of Object.entries(gladiator[1])) {
                sumOfSkills += technique[1];
            }
            totalSkills[gladiator[0]] = sumOfSkills;

        }
        return totalSkills[name];
    }

    let sortedByTotalSkills = Object.entries(totalSkills).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0])
    });

    for (let i = 0; i < sortedByTotalSkills.length; i++) {
        console.log(`${sortedByTotalSkills[i][0]}: ${sortedByTotalSkills[i][1]} skill`);

        let sortedTechEntries = Object.entries(arena[sortedByTotalSkills[i][0]]).sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        });

        for (let i = 0; i < sortedTechEntries.length; i++) {
            console.log(`- ${sortedTechEntries[i][0]} <!> ${sortedTechEntries[i][1]}`);
        }
    }
}
arenaTier(['Peter -> BattleCry -> 400', 'Alex -> PowerPunch ->  300', 'Stefan -> Duck -> 200', 'Stefan -> Tiger -> 250', 'Ave Cesar']);
// arenaTier(['Peter -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 'Gladius -> Shield -> 250', 'Peter vs Gladius', 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar']);