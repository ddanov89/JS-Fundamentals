function sumOfOddNumbers(input) {

    let n = Number(input);
    let sum = 0;
    let counter = 0;
    for (let i = 1; i <= 100; i += 2) {
        console.log(i);
        counter++;
        sum += i;
        if (counter == n) {
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}
sumOfOddNumbers(5);

function sumOfOddNumbers(n) {
    let sum = 0;
    let num = 1;
    while (n > 0){
        console.log(num);
        sum += num;
        num += 2;
        n--;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);

