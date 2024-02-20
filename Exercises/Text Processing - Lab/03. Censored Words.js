function censorWords(text, str) {
    let censored = "*".repeat(str.length);
    let result = text;
    while(result.includes(str)){
        result = result.replace(str, censored);
    }
    console.log(result.replace(str,censored));
}
censorWords('A small sentence with some words', 'small');
censorWords('Find the hidden word', 'hidden');