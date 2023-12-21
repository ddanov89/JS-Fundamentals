function oddOccurences(str) {

    let sentenceElements = str.split(" ").map(el => el.toLowerCase());
    let wordsMap = new Map();

    sentenceElements.forEach(word => {
        if (wordsMap.has(word)) {
            wordsMap.set(word, wordsMap.get(word) + 1);
        } else {
            wordsMap.set(word, 1);
        }
    });
    
    let result = "";

    for (let kvp of wordsMap) {
        if (kvp[1] % 2 === 1) {
            result += kvp[0] + " ";
        }
    }
    result.slice(0, -1);
    console.log(result);
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// oddOccurences('Cake IS SWEET is Soft CAKE sweet Food');