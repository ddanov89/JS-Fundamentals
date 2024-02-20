function signCheck(num1, num2, num3) {
    let sourceArray = new Array(num1, num2, num3);
    let result = sourceArray.filter(element => element < 0 );
    if (result.length % 2 == 1){
        console.log("Negative");
    }else {
        console.log("Positive");
    }
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);