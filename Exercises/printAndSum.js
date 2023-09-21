function printAndSum (start, end){
    let numbsString = "";
    let sum = 0;
    for (let num = start; num <= end; num++){
        numbsString += num + " ";
        sum += num;
    }
    console.log(numbsString);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);