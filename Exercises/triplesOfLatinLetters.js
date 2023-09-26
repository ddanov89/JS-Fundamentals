function triplesOfLatinLetters(num) {
    let triples = '';
    for (let a = 0; a < num; a++) {
        let firstLetter = String.fromCharCode(97+a);
        for (let b = 0; b < num; b++) {
            let secondLetter = String.fromCharCode(97+b);
            for (let c = 0; c < num; c++) {
                let thirdLetter = String.fromCharCode(97+c);
                triples = firstLetter + secondLetter + thirdLetter;
                console.log(triples);
            }
        }
    }
}
triplesOfLatinLetters(2);