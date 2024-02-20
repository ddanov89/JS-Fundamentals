function countStringOccurences(input, str) {
    let words = input.split(" ");  
    let matches = words.filter(word => word == str);

    let count = 0;
    for (let word of words){
        if (word = str) {
            count++;
        }
    }
    console.log(matches.length);
}
countStringOccurences('This is a word and it also is a sentence', 'is');
countStringOccurences('softuni is great place for learning new programming languages', 'softuni');