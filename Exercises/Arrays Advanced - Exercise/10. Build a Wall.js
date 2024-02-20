function top(arr) {
    arr.sort((a, b) => b - a);
    let work = [];
    let bricks = 0;
 
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] < 30) {
          let length = arr.length - i;
            let cubic = length * 195;
            length--;
            let repeat = 30 - arr[i];
            work.push(...Array(repeat).fill(cubic));
            bricks += cubic * repeat;
 
            for (let j = i; j < arr.length; j++) {
                arr[j] += repeat;
            }
        }
    }
 
    console.log(work.join(", "));
    console.log(`${bricks * 1900} pesos`);
}