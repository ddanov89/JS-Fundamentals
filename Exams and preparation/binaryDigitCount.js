function binaryDigitCount(number, digit) {
    let count = 0;
    while (number > 0) {
        let remainder = number % 2;
        number = Math.floor(number / 2);
        if (remainder === digit) {
            count++;
        }
    }
    console.log(count);
}
// binaryDigitCount(20, 0);
binaryDigitCount(15, 1);