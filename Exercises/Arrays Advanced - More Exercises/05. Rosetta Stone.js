function rosettaStone(arr) {
    let rowsTemplate = Number(arr[0]);
    let templateMatrix = [];
    let templateCol = 0;
    let counter = 0;
    for (let i = 1; i <= rowsTemplate; i++) {
        counter++;
        templateMatrix.push(arr[i].split(' ').map(Number));
    }
    templateCol = templateMatrix[0].length;
    counter = 0;
    let messageMatrix = [];
    let messageRows = arr.length - rowsTemplate - 1;
    let messageCol = 0;
    for (let i = rowsTemplate + 1; i < arr.length; i++) {
        counter++;
        messageMatrix.push(arr[i].split(' ').map(Number));
    }
    messageCol = messageMatrix[0].length;
    counter = 0;

    let matrix = messageMatrix;
    let outputMessage = '';
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] += templateMatrix[row % rowsTemplate][col % templateCol];
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let num = matrix[i][j] % 27;
            if (num != 0) {
                matrix[i][j] = String.fromCharCode(num + 64);
            } else {
                matrix[i][j] = ' ';
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            outputMessage += matrix[i][j];
        }
    }
    console.log(outputMessage);
}
rosettaStone(['2', '59 36', '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']);
rosettaStone(['2', '31 32', '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22']);