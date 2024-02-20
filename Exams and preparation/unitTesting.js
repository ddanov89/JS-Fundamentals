function sum(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item;
        return sum;
    }
}

function testSum() {
    if (sum ([1, 2]) != 3) {
        throw "1+2 != 3";
    }else if (sum ([-2]) != -2) {
        throw "-2 != -2";
    } else if (sum ([]) != 0) {
        throw "empty sum != 0";
    }
}
console.log(sum([12, 3, 4]));