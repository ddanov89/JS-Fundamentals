function sumDigits(num) {
    let sum = 0;
    while (num != 0) {
        let units = num % 10;
        num -= units;
        num /= 10;
        sum += units;
    }
    console.log(sum);
}
sumDigits(543);
/*
function sumDigits(num) {
    let numAsString = String(num); // num.String()
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    console.log(sum);
}
sumDigits(245678);*/