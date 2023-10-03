function rotateArray(array) {
    let rotation = Number(array[array.length - 1]);
    array.pop();
    for (let i = 0; i < rotation; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }
    console.log(array.join(" "));
}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);