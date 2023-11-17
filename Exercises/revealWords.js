function revealWords(wordsStr, text) {
    let words = wordsStr.split(", ");
    for (let word of words) {
        let starTemplate = "*".repeat(word.length);
       text = text.replace(starTemplate, word);
    }
    console.log(text);
}
revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');