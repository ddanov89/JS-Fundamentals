function sortNumbers(num1, num2, num3) {
    let maxNumber = 0;
    let minNumber = 0;
    let midNumber = 0;
    if (num1 >= num2 && num1 >= num3) {
        maxNumber = num1;
        if (num2 >= num3) {
            minNumber = num2;
            midNumber = num3;
        } else {
            minNumber = num3;
            midNumber = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        maxNumber = num2;
        if (num3 >= num1) {
            minNumber = num1;
            midNumber = num3;
        } else {
            minNumber = num3;
            midNumber = num1;
        }
    } else if (num3 >= num1 && num3 >= num2) {
        maxNumber = num3;
        if (num2 >= num1) {
            minNumber = num1;
            midNumber = num2;
        } else {
            minNumber = num2;
            midNumber = num1;
        }
        console.log(maxNumber);
        console.log(midNumber);
        console.log(minNumber);
    }
}
sortNumbers(2, 1, 3);