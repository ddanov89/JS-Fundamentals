function addAndSubtract(input = []) {
    let newArr = [];
    let num = 0;
    for (let i = 0; i < input.length; i++) {
        num++;
        if (input[i] === 'add') {
            newArr.push(num);
        } else if (input[i] === 'remove') {
            newArr.pop(i);
        }
    }
    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}