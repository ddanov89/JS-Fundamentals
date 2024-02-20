function asciiSumator(arr) {

    let [symbol1, symbol2, string] = arr;

    let sum = 0;
    
    let startRange = Math.min(symbol1.charCodeAt(), symbol2.charCodeAt());
    let endRange = Math.max(symbol1.charCodeAt(), symbol2.charCodeAt());

    let words = string.split("");
    words.forEach(char => {
        if (char.charCodeAt() > startRange && char.charCodeAt() < endRange) {
            sum += char.charCodeAt();
        }
    });
    console.log(sum);
}
// asciiSumator(['.', '@', 'dsg12gr5653feee5']);
// asciiSumator(['?', 'E', '@ABCEF']);
asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);