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
}
starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
// starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR']);