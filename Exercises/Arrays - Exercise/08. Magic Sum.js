function magicSum(a, b) {
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (Number(a[i]) + Number(a[j]) === Number(b)) {
                console.log(a[i] + ` ` + a[j]);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 9, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);