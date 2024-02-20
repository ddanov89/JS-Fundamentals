function starEnigma(arr) {

    let numberOfMessages = Number(arr.shift());
    let decryptedMessages = [];
    let starPattern = /[star]/gi;

    for (let i = 0; i < numberOfMessages; i++) {
        let message = arr[i];
        let decryptedMessage = "";
        let matches = message.match(starPattern);
        if (matches) {
            let count = matches.length;
            for (let char of message) {
                let code = char.charCodeAt();
                code -= count;
                let newChar = String.fromCharCode(code);
                decryptedMessage += newChar;
            }
        } else {
            decryptedMessage = message;
        }
        decryptedMessages.push(decryptedMessage);
    }
    let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[A|D])![^@\-!:>]*->(?<soldier>\d+)/;
    let attackPlanets = [];
    let destroyedPlanets = [];
    for (let message of decryptedMessages) {
        let match = message.match(planetPattern);
        if (match) {
            let { name, type } = match.groups;
            if (type == "A") {
                attackPlanets.push(name);
            } else {
                destroyedPlanets.push(name);
            }
        }
    }
    attackPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attackPlanets.length}`);
    attackPlanets.forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(planet => console.log(`-> ${planet}`));
}
// starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR']);