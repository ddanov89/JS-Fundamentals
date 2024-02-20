function airPollution(matrixArr, commandArr) {

    let matrix = [];

    let map = matrixArr.forEach(element => {
        let row = element.split(" ").map(Number);
        matrix.push(row);
    });
    
    for (let i = 0; i < commandArr.length; i++) {
        let command = commandArr[i].split(" ");

        if (command[0] == "breeze") {
            let transformed = matrix[command[1]].map(item => {
                item -= 15;
                if (item < 0) {
                    item = 0;
                }
                return item;
            });
            matrix[command[1]] = transformed;

        } else if (command[0] == "gale") {
            let index = command[1];
            for (let j = 0; j < matrix.length; j++) {
                let rowArr = matrix[j];
                rowArr[index] -= 20;
                if (rowArr[index] < 0) {
                    rowArr[index] = 0;
                }
            }

        } else if (command[0] == "smog") {
            let incrementValue = Number(command[1]);
            for (let a = 0; a < matrix.length; a++) {
                let rowArr = matrix[a];
                let incrementRow = rowArr.map(element => {
                    element += incrementValue;
                    return element;
                });
                matrix[a] = incrementRow;
            }
        }
    }
    let finalString = 'Polluted areas: ';
    let isPolluted = false;
    for (let b = 0; b < matrix.length; b++) {
        for (let c = 0; c < matrix[b].length; c++) {
            if (matrix[b][c] >= 50) {
                isPolluted = true;
                finalString += `[${b}-${c}], `;
            }
        }
    }
    finalString = finalString.slice(0, -2);
    if (isPolluted) {
        console.log(finalString);
    } else {
        console.log("No polluted areas");
    }
}
airPollution(
    ['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']);