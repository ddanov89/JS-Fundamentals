function evenOrOddSubtraction(array) {
    let [evenSum, oddSum] = [0, 0];
    for (let i = 0; i < array.length; i++) {
        if ( Number(array[i]) % 2 == 0){
            evenSum += Number(array[i]);
        }else {
            oddSum += Number(array[i]);
        }
    }
    console.log(evenSum - oddSum);
}
evenOrOddSubtraction([1,2,3,4,5,6]);
evenOrOddSubtraction([3, 5, 7, 9]);