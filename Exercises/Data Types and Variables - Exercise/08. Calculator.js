function calculator(number, operator, number2){
    let res;
    switch (operator){
        case "+": res = number + number2 ; break;
        case "-": res = number - number2 ; break;
        case "/": res = number / number2 ; break;
        case "*": res = number * number2 ;break;
    }
    console.log(res.toFixed(2));
}
calculator(5, '+', 10);