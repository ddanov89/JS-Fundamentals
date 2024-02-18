function firstAndLastKNumbers(input) {
    let k = input.shift();
    console.log(input.slice(0, k).join(" "));
    console.log(input.slice(-k).join(" "));
}
firstAndLastKNumbers([3, 6, 7, 8, 9]);