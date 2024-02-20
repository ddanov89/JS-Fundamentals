function bitcoin(array) {
    let bitcoinBought = 0;
    let dayOfBitcoinBought = 0;
    let moneyEarned = 0;
    let isFirstDay = false;
    for (let i = 0; i < array.length; i++) {
        let gramsPerDay = array[i];
        if ( (i + 1) % 3 == 0){
            gramsPerDay *= 0.70;
        }
        moneyEarned += gramsPerDay * 67.51;
        let bitcoinsToBuy = Math.floor(moneyEarned / 11949.16)
        if(bitcoinsToBuy >= 1){
            bitcoinBought += bitcoinsToBuy;
            moneyEarned -= bitcoinsToBuy * 11949.16;
            if (isFirstDay == false){
                dayOfBitcoinBought = i + 1;
                isFirstDay = true;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoinBought}`);
    if ( dayOfBitcoinBought > 0){
        console.log(`Day of the first purchased bitcoin: ${dayOfBitcoinBought}`);
    }
    console.log(`Left money: ${moneyEarned.toFixed(2)} lv.`);
}
bitcoin ([3124.15, 504.212, 2511.124]);