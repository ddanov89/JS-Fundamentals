function condenseArrayToNumber(array) {
    let condensedArray = [];
    condensedArray.length = array.length - 1;
    let index = 0;
    while (array.length > 1) {
        for (let i = 0; i < array.length - 1; i++) {
            condensedArray[index] = Number(array[i]) + Number(array[i + 1]);
          index++;
        }
        array = condensedArray;
        index = 0;
        condensedArray = new Array(array.length - 1);
    }
    console.log(array[0]);
}
condenseArrayToNumber([2,10,3]);