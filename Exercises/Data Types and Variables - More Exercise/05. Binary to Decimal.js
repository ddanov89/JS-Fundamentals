function binaryToDecimal(num) {
    let convert = parseInt(num, 2);
    console.log(convert);
}
binaryToDecimal("00001001");

function toDecimal(v) {
    let binary = '';
    if (typeof v == 'string') {
        binary = v.split();
    } else {
        binary = v.toString().split();
    }
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
        decimal = (decimal * 2) + binary[i];
    }
    return decimal;
}
toDecimal("00001001")