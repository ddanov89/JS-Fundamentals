function race(arr) {
    let namesList = arr.shift().split(", ");
    let command = arr.shift();

    let results = {};
    let letterPattern = /[a-z]/gi;
    let digitPattern = /\d/g;
    namesList.forEach(name => {
        results[name] = 0;
    });

    while (command != "end of race") {
        let letterMatches = command.match(letterPattern);
        let name = letterMatches.join("");
        let digitMatches = command.match(digitPattern);
        let distance = digitMatches.map(Number).reduce((acc, val) => acc + val, 0);
        if (name in results) {
            results[name] += distance;
        }
        command = arr.shift();
    }
    let sorted = Object.entries(results).sort((a,b) => b[1] - a[1]);
        console.log(`1st place: ${sorted[0][0]}`);
        console.log(`2nd place: ${sorted[1][0]}`);
        console.log(`3rd place: ${sorted[2][0]}`);
}
// race(['George, Peter, Bill, Tom', 'G4e@55or%6g6!68e!!@ ', 'R1@!3a$y4456@', 'B5@i@#123ll', 'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race']);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne', 'Mi*&^%$ch123o!#$%#nne787) ', '%$$B(*&&)i89ll)*&) ', 'R**(on%^&ald992) ', 'T(*^^%immy77) ', 'Ma10**$#g0g0g0i0e', 'end of race']);