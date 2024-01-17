function mergeArrays(array1, array2) {
    let mergedArray = [];
    for ( let i = 0; i < array1.length; i++){
        let element1 = array1[i];
        let element2 = array2[i];
        if ( i % 2 == 0){
            mergedArray.push(Number(element1) + Number(element2));
        }else {
            let concatenation = element1 + element2;
            mergedArray.push(concatenation);
        }
    }
    console.log(mergedArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);