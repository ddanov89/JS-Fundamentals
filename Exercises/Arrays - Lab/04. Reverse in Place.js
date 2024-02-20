function reverseInPlace(array) {
    for (let i = 0; i < array.length / 2; i++){
        let j = array.length - 1 - i;
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
    }
    console.log(array.join(" "));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);