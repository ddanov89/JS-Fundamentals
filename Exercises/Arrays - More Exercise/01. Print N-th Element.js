function printNTHElement(array) {
    let newArray = [];
    for (let i = 0; i < array.length - 1; i += Number(array[array.length - 1])) {
        newArray.push(array[i]);
    }
    console.log(newArray.join(" "));
}
printNTHElement(['5', '20', '31', '4', '20', '2']);
printNTHElement(['dsa', 'asd', 'test', 'test', '2']);
printNTHElement(['1', '2', '3', '4', '5', '6']);