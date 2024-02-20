function janSNotation(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            newArr.push(arr[i]);
        }else {
            if (newArr.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }else {

                let firstOperand = newArr.pop();
                let secondOperand = newArr.pop();
                let result = 0;

                switch (arr[i]) {
                    case "+": result = firstOperand + secondOperand; break;
                    case "-": result = secondOperand - firstOperand; break;
                    case "*": result = firstOperand * secondOperand; break;
                    case "/": result = secondOperand / firstOperand; break;
                }
                newArr.push(result);
            }
        }
    }
    if (newArr.length > 1) {
        console.log("Error: too many operands!");
    } else if (newArr.length = 1) {
        console.log(newArr[0]);
    }
}
// janSNotation([3, 4, '+']);
// janSNotation([5, 3, 4, '*', '-']);
// janSNotation([31, 2, '+', 11, '/']);
// janSNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);
// janSNotation([15, '/']);
janSNotation([7, 33, 8, '-']);