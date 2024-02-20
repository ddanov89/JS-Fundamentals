function blackFlag(arr) {

    let days = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);
    let plunderGained = 0;

    for (let i = 1; i <= days; i++) {
        plunderGained += dailyPlunder;

        if (i % 3 == 0) {
            plunderGained += dailyPlunder * 0.50;
        }
        if (i % 5 == 0) {
            plunderGained -= plunderGained * 0.30;
        }
    }
    if (plunderGained >= expectedPlunder) {
        console.log(`Ahoy! ${plunderGained.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${(plunderGained / expectedPlunder * 100).toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);