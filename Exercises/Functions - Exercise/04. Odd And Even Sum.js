function oddEven(input) {
    let n = Number(input[0]);

    let odd = 0;
    let even = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
    if( i % 2 ==0) {
            even += num;
        } else {
            odd += num;
        }
    }
    
    let diff = Math.abs(odd - even);
    if (even == odd) {
        console.log('Yes');
        console.log('Sum = '+ even);
        
    } else {
        console.log('No');
        console.log('Diff = ' + diff); 
    }
}