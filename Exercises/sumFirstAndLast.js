function sumFirstAndLast(arr) {
    let sum = 0;
    let firstElement = arr.shift();
    let lastElement = arr.pop();
    console.log(Number(firstElement) + Number(lastElement));
}
sumFirstAndLast([5, 10]);