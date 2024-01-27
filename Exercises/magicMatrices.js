function magicMatrices(array) {
    let isMagical = false;
    let rowSum = 0;
    let columnSum = 0;
    let tempRowSum = 0;
    let tempColumnSUm = 0;
    for (let i = 0; i < array.length; i++) {
        let subArray = array[i];
        for (let j = 0; j < subArray.length; j++) {
            tempRowSum += subArray[j];
           for (let k = 0; k < array.length; k++) {
                tempColumnSUm += array[k][j];
            }
            if (columnSum == 0) {
                columnSum = tempColumnSUm;
            }
            if (tempColumnSUm == columnSum) {
                isMagical = true;
            }
            else{
                isMagical = false;
                break;
            }
        }
        if (rowSum == 0) {
            rowSum = tempRowSum;
        }
        if (tempRowSum == rowSum) {
            isMagical = true;
        }
        else{
            isMagical = false;
            break;
        }
        // if (columnSum == rowSum) {
        //     isMagical = true;
        // } else {
        //     isMagical = false;
        //     break;
        // }
        tempColumnSUm = 0;
        tempRowSum = 0;
    }
    console.log(isMagical);
}
magicMatrices(
    [[4, 5, 6], 
    [6, 5, 4], 
    [5, 5, 5]]);
// magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);