function arrayManipulation(array) {
    let arr = array.shift().split(" ").map(Number);
    for (let i = 0; i < array.length; i++) {
        let [command, firstNum, secondNum] = array[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case "Add": add(firstNum); break;
            case "Remove": remove(firstNum); break;
            case "RemoveAt": removeAt(firstNum); break;
            case "Insert": insert(firstNum, secondNum); break;
        }
    }
    function add(el) {
        arr.push(el);
    }
    function remove(el) {
        arr = arr.filter(item => item !== el);
    }
    function removeAt(index) {
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1);
        }
    }
    function insert(num, index) {
        if (index >= 0 && index <= arr.length) {
            arr.splice(index, 0, num);
        }
    }
    console.log(arr.join(" "));
}
arrayManipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulation(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);