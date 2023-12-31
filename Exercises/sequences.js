// function sequences(arr) {

//     let numberArr = arr.map(element => JSON.parse(element)
//         .sort((a, b) => b - a))
//         .map(element => JSON.stringify(element));

//         let resultArr = [];

//     for (let i = 0; i < numberArr.length; i++) {
//         if (!resultArr.includes(numberArr[i])) {
//             resultArr.push(numberArr[i]);
//         }
//     }
//     resultArr.sort((a, b) => b - a);
//     resultArr.forEach(element => {
//         let array = JSON.parse(element).join(", ");
//         console.log(`[${array}]`);
//     });
// }


function sequences(arr) {
    
    arr = arr.map(el => JSON.parse(el));
    arr.forEach(el => el.sort((a, b) => b - a));
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentArr = arr[i];
        let isUnique = true;
        for (let j = 0; j < resultArr.length; j++) {
            let nextArray = resultArr[j];
            if (nextArray.toString() === currentArr.toString()) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            resultArr.push(currentArr);
        }
    }
    resultArr.sort((a, b) => a.length - b.length);
    resultArr.forEach(el => console.log(`[${el.join(', ')}]`));
}
sequences(["[-3, -2, -1, 1, 2, 3]", "[10, 1, -17, 0, 2, 13]", "[-3, 3, -2, 2, -1, 1]"]);
// sequences(["[7.14, 7.180, 7.339, 80.099]", "[7.339, 80.0990, 7.140000, 7.18]", "[7.339, 7.180, 7.14, 80.099]"]);