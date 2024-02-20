function gladiatorExpenses(lostBattlesCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;
    for (let i = 1; i <= lostBattlesCount; i++) {
        if ( i % 12 == 0){
            totalExpenses += helmetPrice + swordPrice + shieldPrice + armorPrice;
        }else if ( i % 6 == 0){
            totalExpenses += helmetPrice + swordPrice + shieldPrice;
        }else if (i % 3 == 0){
            totalExpenses += swordPrice;
        }else if ( i % 2 == 0){
            totalExpenses += helmetPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);