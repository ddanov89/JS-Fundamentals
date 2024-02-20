function numberModification(num) {
    let numArray = num.toString().split("").map(element => Number(element));
    let average = 0;
    while (average <= 5) {
        let sum = numArray.reduce((totalSum, currentValue) => totalSum + currentValue, 0);
        average = sum / numArray.length;
         if (average <= 5) {
           numArray.push(9);
         }
    }
    console.log(numArray.join(""));
}
numberModification(101);
numberModification(5835);