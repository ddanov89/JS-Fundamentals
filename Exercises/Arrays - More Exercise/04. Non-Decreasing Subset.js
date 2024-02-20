function nonDecreasingSubset(array) {
    let highestNumber = array[0];
    let increasingNUmbers = array.filter(element => { 
        if ( element >= highestNumber){
            highestNumber = element;
        }
        return element == highestNumber;
});
console.log(increasingNUmbers.join(" "));
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);