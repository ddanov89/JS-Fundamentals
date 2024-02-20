function primeNumberChecker(n) {
    for ( let i = 2; i < n; i++){
        if (n % i === 0){
            console.log(false);
            return;
        }
    }
    console.log(n > 1);
}
primeNumberChecker(11);
/*
function primeNumberChecker(num) {
    let sqrtnum = Math.floor(Math.sqrt(num));
      let prime = num != 1;
      for(let i = 2 ; i < sqrtnum + 1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      console.log(prime);
  }
  primeNumberChecker(7);*/