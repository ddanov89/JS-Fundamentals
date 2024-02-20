function distinctArray(arr) {
    let uniqueNumbers = [];
    for (const num of arr) {
        if (!uniqueNumbers.includes(num)) {
            uniqueNumbers.push(num);
        }
    }
    console.log(uniqueNumbers.join(" "));
}
distinctArray([1, 1, 2, 3, 4]);