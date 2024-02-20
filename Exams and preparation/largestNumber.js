function largestNumber(a, b, c) {
    let largestNumber = Math.max(a, b, c) | 0;
    console.log(`The largest number is ${largestNumber}.`);
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);