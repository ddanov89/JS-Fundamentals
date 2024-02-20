function concert(arr) {
    let index = 0;
    let bands = new Map();
    let totalTimePlayed = 0;
    
    while (arr[index] != "Start!") {
        let commandInfo = arr[index].split("; ");
        if (commandInfo[0] == "Add") {
            let name = commandInfo[1];
            let bandMembersArr = commandInfo[2].split(", ");
            if (!bands.has(name)) {
                let band = {
                    name: name,
                    bandMembers: bandMembersArr,
                    time: 0,
                };
                bands.set(name, band);
            } else {
                let band = bands.get(name);
                bandMembersArr.forEach(element => {
                    if (!band.bandMembers.includes(element)) {
                        band.bandMembers.push(element);
                    }
                });
            }
        } else if (commandInfo[0] == "Play") {
            let name = commandInfo[1];
            let time = Number(commandInfo[2]);
            if (!bands.has(name)) {
                let band = {
                    name: name,
                    bandMembers: [],
                    time: time,
                };
                bands.set(name,band);
            } else {
                let band = bands.get(name);
                band.time += time;
            }
            totalTimePlayed += time;
        }
        index++;
    }
    console.log(`Total time: ${totalTimePlayed}`);
    for (let [name, band] of bands.entries()) {
        console.log(`${name} -> ${band.time}`);
    }
    let bandNames = bands.entries().next().value;
    console.log(`${bandNames[0]}`);
    let band = bands.get(bandNames[0]);
    for (let member of band.bandMembers) {
        console.log(`=> ${member}`);
    }
}
// concert(["Play; The Beatles; 2584", "Add; The Beatles; John Lennon, George Harrison, Ringo Starr", "Add; The Beatles; Paul McCartney, George Harrison", "Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards", "Play; The Rolling Stones; 4239", "Start!"]);
concert(["Add; The Beatles; John Lennon, Paul McCartney","Add; The Beatles; Paul McCartney, George Harrison","Add; The Beatles; George Harrison, Ringo Starr","Play; The Beatles; 3698","Play; The Beatles; 3828","Start!"]);
// concert(["Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr","Play; The Beatles; 4569","Play; The Beatles; 2456","Play; Queen; 1250","Add; Queen; Freddie Mercury, Brian May, Roger Taylor, John Deacon","Play; Queen; 6215","Start!"]);