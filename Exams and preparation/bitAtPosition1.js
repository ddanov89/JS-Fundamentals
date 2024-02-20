function bitAtPosition1(number) {
    let shiftedNumber = number >> 1;
    let lsb = shiftedNumber & 1;
    console.log(lsb);
}
// bitAtPosition1(2);
bitAtPosition1(51);