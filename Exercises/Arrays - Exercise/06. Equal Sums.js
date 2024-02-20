function equalSums(array) {
    let isSumEqual = false;
    let leftSUm = 0;
    let rightSum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++){
            leftSUm += Number(array[j]);
        }
        for (let l = i + 1; l < array.length; l++) {
            rightSum += Number(array[l]);
        }
        if ( leftSUm == rightSum){
            isSumEqual = true;
            console.log(i);
            break;
        }
        leftSUm = 0;
        rightSum = 0;
    }
    if (!isSumEqual) {
        console.log("no");
    }
}
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
// equalSums([1, 2, 3]);
equalSums([1]);