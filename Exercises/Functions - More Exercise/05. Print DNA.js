/*function printDna(num) {

    let blueprintArray = 'ATCGTTAGGG'.split("");
    let indexArray = [0, 1, 2, 1];
    let index = 0;

    for (let i = 0; i < num; i++) {
        let firstElement = blueprintArray.shift();
        let secondElement = blueprintArray.shift();

        let dnaString = (a, b, i) => {
            if (i == 0) {
                return `**${a}${b}**`; 
            }else if (i == 1) {
                return `*${a}--${b}*`;
            }else if (i == 2) {
                return `${a}----${b}`
            }
        };
        blueprintArray.push(firstElement);
        blueprintArray.push(secondElement);
        if (index > 3) {
            index = 0;
        }
        console.log(dnaString(firstElement, secondElement, indexArray[index]));
        index++;
    }
}
printDna(4);
// printDna(10);*/


function printDna(n){
    let arr = 'ATCGTTAGGG'.split('')
    for(let i = 1; i <= n; i++){
        let [a, b] = arr.splice(0,2)
        if(i === 1 || i % 4 === 1){
            console.log(`**${a}${b}**`);
        }
        else if((i === 2 || i % 4 === 2) || i === 4 || i % 4 === 0 ){
            console.log(`*${a}--${b}*`);
        }
        else if(i === 3 || i % 4 === 3){
            console.log(`${a}----${b}`);
        }
 
        arr.push(a)
        arr.push(b)
    }
}
printDna(10);
