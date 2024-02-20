/*
function integerAndFloat(a, b, c){
    let sum = a + b + c;
    let sumAsString = String(sum);
    let isFloat = false;

    for ( let i = 0; i < sumAsString.length; i++){
        if (sumAsString[i] == "."){
            isFloat = true;
        }
    }
    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`); // ternary operator
}
integerAndFloat(9, 100, 1.1);*/

function integerAndFloat(a, b, c){
    let sum = a + b + c;
    let isFloat = sum % 1 != 0;
    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);
}
integerAndFloat(9, 100, 1.1);