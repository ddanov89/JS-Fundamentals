function perfectNumber(num) {
    let sumProperDivisors = 0;
    for (let devisor = 1; devisor < num; devisor++) {
        if (num % devisor == 0) {
            sumProperDivisors += devisor;
        }
    }
    if (sumProperDivisors == num) {
        console.log("We have a perfect number!");
    }else {
        console.log("It\'s not so perfect.");
    }
}
perfectNumber(6);
perfectNumber(28);