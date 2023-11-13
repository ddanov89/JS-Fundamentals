function valueOfAString(arr) {
    let [text, letterCase] = arr;
    let sum = 0;

    let chars = text.split("");
    let startRange = 0;
    let endRange = 0;

    if (letterCase == "LOWERCASE") {
        startRange = 97;
        endRange = 122;
    } else if (letterCase == "UPPERCASE") {
        startRange = 65;
        endRange = 90;
    }
    chars.forEach(char => {
        if (char.charCodeAt(char) >= startRange && char.charCodeAt(char) <= endRange) {
            sum += char.charCodeAt(char);
        }
    });
    console.log(`The total sum is: ${sum}`);
}
valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
valueOfAString(['AC/DC', 'UPPERCASE']);