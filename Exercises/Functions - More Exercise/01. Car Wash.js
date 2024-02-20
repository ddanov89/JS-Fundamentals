function carWash(array) {
    let result = 0;
    array.forEach(command => {
        switch (command){
            case "soap": result += 10; break;
            case "water": result += result * 0.20; break;
            case "vacuum cleaner": result += result * 0.25; break;
            case "mud": result -= result * 0.10; break;
        }
    });
    console.log(`The car is ${result.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);