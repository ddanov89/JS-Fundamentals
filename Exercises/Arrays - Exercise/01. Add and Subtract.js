function addAndSubtract(array) {
    let [originalSum, oldSum] = [0, 0];
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        oldSum += num;
        if (num % 2 == 0) {
            num += i;
        } else {
            num -= i;
        }
        originalSum += num;
        array[i] = num;
    }
    console.log(array);
    console.log(oldSum);
    console.log(originalSum);
}
addAndSubtract([5, 15, 23, 56, 35]); 

function addAndSub(arr) {
    let initialSum = 0;
    let modifiedSum = 0;
    let numbers = [];
    for (let i = 0; i < arr.length; i++) {
        initialSum = initialSum + arr[i];
        if (arr[i] % 2 === 0) {
            numbers.push(arr[i] + i);
        } else if (arr[i] % 2 !== 0) {
            numbers.push(arr[i] - i);
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        modifiedSum = modifiedSum + numbers[i];
    }

    console.log(numbers);
    console.log(initialSum);
    console.log(modifiedSum);
}
addAndSubtract([5, 15, 23, 56, 35]); 