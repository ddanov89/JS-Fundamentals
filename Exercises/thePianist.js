function thePianist(arr) {

    let numberOfPieces = Number(arr.shift());
    let endCommand = arr.pop();
    let pieces = new Map();

    for (let i = 0; i < numberOfPieces; i++) {
        let [name, composer, key] = arr.shift().split("|");
        let piece = {
            name: name,
            composer: composer,
            key: key,
        }
        pieces.set(name, piece);
    }
    for (let tokens of arr) {
        let commandInfo = tokens.split("|");
        if (commandInfo[0] == "Add") {
            if (pieces.has(commandInfo[1])) {
                console.log(`${commandInfo[1]} is already in the collection!`);
            } else {
                let piece = {
                    name: commandInfo[1],
                    composer: commandInfo[2],
                    key: commandInfo[3],
                }
                pieces.set(commandInfo[1], piece);
                console.log(`${commandInfo[1]} by ${commandInfo[2]} in ${commandInfo[3]} added to the collection!`);
            }
        } else if (commandInfo[0] == "Remove") {
            if (pieces.has(commandInfo[1])) {
                pieces.delete(commandInfo[1]);
                console.log(`Successfully removed ${commandInfo[1]}`);
            } else {
                console.log(`Invalid operation! ${commandInfo[1]} does not exist in the collection.`);
            }
        } else if (commandInfo[0] == "ChangeKey") {
            if (pieces.has(commandInfo[1])) {
                let piece = pieces.get(commandInfo[1]);
                piece.key = commandInfo[2];
                console.log(`Changed the key of ${commandInfo[1]} to ${commandInfo[2]}!`);
            }else {
                console.log(`Invalid operation! ${commandInfo[1]} does not exist in the collection.`);
            }
        }
    }
    for (let [name, piece] of pieces.entries()) {
        console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
    }
}
thePianist(['3', 'Fur Elise|Beethoven|A Minor', 'Moonlight Sonata|Beethoven|C# Minor', 'Clair de Lune|Debussy|C# Minor', 'Add|Sonata No.2|Chopin|B Minor', 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 'Add|Fur Elise|Beethoven|C# Minor', 'Remove|Clair de Lune', 'ChangeKey|Moonlight Sonata|C# Major', 'Stop']);
// thePianist(['4', 'Eine kleine Nachtmusik|Mozart|G Major', 'La Campanella|Liszt|G# Minor', 'The Marriage of Figaro|Mozart|G Major', 'Hungarian Dance No.5|Brahms|G Minor', 'Add|Spring|Vivaldi|E Major', 'Remove|The Marriage of Figaro', 'Remove|Turkish March', 'ChangeKey|Spring|C Major', 'Add|Nocturne|Chopin|C# Minor', 'Stop']);