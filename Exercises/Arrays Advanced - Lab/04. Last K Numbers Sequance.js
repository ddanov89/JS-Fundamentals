function lastKNumberSequence(n, k) {

    let sumArr = [];

    for (let i = 1; i <= n; i++) {

        let sum = 0;
        
        if (i == 1 || i == 2) {
            sum = 1;
        } else {
            let count = k;
            let sumElementIndex = sumArr.length - 1;

            while (count >= 1) {
                if (sumElementIndex >= 0) {
                    sum += sumArr[sumElementIndex];
                }
                sumElementIndex--;
                count--;
            }        
        }
        sumArr.push(sum);
    }
    console.log(sumArr.join(" "));
}
lastKNumberSequence(6, 3);
lastKNumberSequence(8, 2);