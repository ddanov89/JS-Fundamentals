function emojiDetector(input) {

    let emojiPattern = /(?<start>::|\*\*)(?<word>[A-Z][a-z]{2,})\1/g;
    let digitPattern = /\d/g;
    let digits = input[0].match(digitPattern);
    let threshold = digits.reduce((acc, currentValue) => acc * currentValue, 1);
    console.log(`Cool threshold: ${threshold}`);
    let emojis = input[0].match(emojiPattern);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    emojis.forEach(element => {
        let emoji = element.substring(2, element.length - 2);
        let emojiThreshold = emoji.split("").map(character => character.charCodeAt()).reduce((acc, currentValue) => acc + currentValue,
            0);
        if (emojiThreshold >= threshold) {
            console.log(element);
        }
    });
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
// emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
// emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);