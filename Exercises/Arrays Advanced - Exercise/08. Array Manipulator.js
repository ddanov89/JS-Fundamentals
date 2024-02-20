function arrayManipulator(intArr, commandArr) {
    let sumArr = [];
    let tempPairs = 0;
    for (let i = 0; i < commandArr.length; i++) {
        let indexArr = commandArr[i].split(" ");
        if (indexArr[0] == "add") {
            intArr.splice(Number(indexArr[1]), 0, Number(indexArr[2]));
        } else if (indexArr[0] == "addMany") {
            let slicedArr = indexArr.slice(2).map(Number);
            intArr.splice(Number(indexArr[1]), 0, ...slicedArr);
        } else if (indexArr[0] == "contains") {
            intArr.indexOf(Number(indexArr[1])) != -1;
                console.log(intArr.indexOf(Number(indexArr[1])));
        } else if (indexArr[0] == "remove") {
            intArr.splice(indexArr[1], 1);
        } else if (indexArr[0] == "shift") {
            for (let k = 1; k <= Number(indexArr[1]); k++) {
                let shifted = intArr.shift();
                intArr.push(shifted);
            }
        } else if (indexArr[0] == "sumPairs") {
            for (let j = 0; j < intArr.length; j += 2) {
                if (j == intArr.length - 1) {
                    tempPairs = intArr[j];
                }else {
                    tempPairs = intArr[j] + intArr[j + 1];
                }
                sumArr.push(tempPairs);
            }
            intArr = sumArr;
            sumArr = [];
        }else if (indexArr[0] == "print") {
            console.log((`[ ${intArr.join(", ")} ]`));
        }
    }
}
// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['sumPairs','print']);
// arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);