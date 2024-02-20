function equalArray(array1, array2) {
    let isIdentical = true;
    let sum = 0;
    let firstIndex = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] == array2[i]){
            sum += Number(array1[i]);
        }else {
            isIdentical = false;
            firstIndex = i;
            break;
        }
    }
    if (isIdentical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }else {
        console.log(`Arrays are not identical. Found difference at ${firstIndex} index`);
    }
}
equalArray(['10','20','30'], ['10','20','30']);
equalArray(['1','2','3','4','5'], ['1','2','4','4','5']);