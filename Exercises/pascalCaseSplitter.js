function pascalCaseSplitter(str) {

    let words = str.split("");
    let singleWord = words.shift();
    
    let resultArr = [];

    for (let char of words) {
        if (/[A-Z]/.test(char)) {
            resultArr.push(singleWord);
            singleWord = char;
        }else {
            singleWord += char;
        }
    }
    resultArr.push(singleWord);
    console.log(resultArr.join(", "));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
// pascalCaseSplitter('HoldTheDoor');
// pascalCaseSplitter('ThisIsSoAnnoyingToDo');