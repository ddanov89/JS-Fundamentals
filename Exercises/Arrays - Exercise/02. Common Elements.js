function commonElements(array1, array2) {
    for (let element of array1) {
        if (array2.includes(element)) {
            console.log(element);
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);