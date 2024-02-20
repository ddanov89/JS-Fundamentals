function multiplicationTable(number){
    for(let i = 1; i <= 10; i+=1){
        let result = i * number;
        console.log(`${number} X ${i} = ${result}`);
    }
}
multiplicationTable([5]);   