function numbers(str) {
    let arr = str
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let average = sum / arr.length;
    let result = arr.filter((x) => x > average).slice(0, 5);
    let stringResult = result.length > 0 ? result.join(" ") : 'No';
    console.log(stringResult);
}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');