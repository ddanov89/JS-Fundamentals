function spiceMustFlow(currentYield) {
    let spice = 0;
    let daysCounter = 0;
    while (currentYield >= 100){
        daysCounter++;
        spice += currentYield - 26;
        currentYield -= 10;
    }
    if (spice >= 26){
        spice -= 26;
    }
    console.log(daysCounter);
    console.log(spice);
}
spiceMustFlow(111);