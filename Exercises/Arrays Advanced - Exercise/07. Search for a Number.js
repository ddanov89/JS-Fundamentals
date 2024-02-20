function searchForANumber(arr1, arr2) {
    let [elsToTake, elsToDelete, searchedNum] = arr2;
    let searchedArr = [];
    let taken = arr1.slice(0, elsToTake);
    let deleted = taken.splice(0, elsToDelete);
    let count = 0;
    for (let num of taken) {
        if (num === searchedNum) {
            count++;
        }
    }
    console.log(`Number ${searchedNum} occurs ${count} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);