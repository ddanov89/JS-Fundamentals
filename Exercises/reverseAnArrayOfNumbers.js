/*
function reverseAnArrayOfNumbers(n, array) {
   // let result = [];
//for ( let i = 0; i < n; i++){
       // result[result.length] = array[i];
        //result[i] = array[i];
      //  result.push(array[i]);
    //}
    let reversed = [];
    for (let i = n - 1; i >= 0; i--){
        reversed.push(array[i]);
    }
    console.log(reversed.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);*/

function reverseAnArrayOfNumbers(n, nums) {
  let result = nums.slice(0, n);
  let reversed = result.reverse();
  console.log(reversed.join(" "));
  console.log(nums.slice(0, n). reverse(). join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
// (n, nums) => nums.slice(0, n). reverse(). join(" "); // arrow function