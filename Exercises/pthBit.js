function pthBit(number, position) {
    let shiftedNumber = number >> position;
    let lsb = shiftedNumber & 1;
    console.log(lsb);
}
// pthBit(2145, 5);
pthBit(512, 0);