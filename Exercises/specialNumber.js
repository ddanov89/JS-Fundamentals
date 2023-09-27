function specialNumber(num){
    let sum = 0;
    let isSpecial = "False";
    for (let i = 1; i <= num; i++){
        let numAsString = i.toString();
        for (let i = 0; i < numAsString.length; i++){
            sum += Number(numAsString[i]);
        }
        if ( sum == 5 || sum == 7 || sum == 11){
            isSpecial = "True";
        }
        console.log(`${i} -> ${isSpecial}`);
        sum = 0;
        isSpecial = "False";
    }
}
specialNumber(15);

/*
function specialNumber(num){
    let sum = 0;
    let isSpecial = 'False';
    for (let i = 1; i <= num; i++) {
        let temp = i;
        while (temp > 0) {
            let units = temp % 10;
            temp -= units;
            temp /= 10;
            sum += units;
        }
        if ( sum == 5 || sum == 7 || sum == 11){
            isSpecial = "True";
        }
        console.log(`${i} -> ${isSpecial}`);
        sum = 0;
        isSpecial = "False";
    }
}
specialNumber(15);*/