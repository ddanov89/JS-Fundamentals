function amazingNumbers(num) {
    let numAsString = String(num);
    let result = 0;
    for (let i = 0; i < numAsString.length; i++) {
        result += Number(numAsString[i]);
    }
    let resultAsString = String(result);
    let isAmazing = "False";
    for (let i = 0; i < resultAsString.length; i++) {
        if (resultAsString[i] == '9') {
            isAmazing = "True"
        }
    }
    console.log(`${num} Amazing? ${isAmazing}`);
}
amazingNumbers(1233);