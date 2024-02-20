function equalNeighbors(arr) {

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let subArray = arr[i];
        for (let j = 0; j < subArray.length -1; j++) {
            if (subArray[j] == subArray[j + 1]) {
                count += 1;
            }
        }
    }
    for (let k = 0; k < arr[0].length; k++) {
        let element = arr[0][k];
        for (let index = 1; index < arr.length; index++) {
            if (arr[index][k] == element) {
                count += 1;
            }
            element = arr[index][k];
        }
    }
    console.log(count);
}
equalNeighbors([
['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);
equalNeighbors([
['test', 'yo', 'yo','ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]);