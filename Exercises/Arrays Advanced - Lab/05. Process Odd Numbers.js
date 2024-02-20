function processOddNumber(arr) {
    console.log(
        arr
            .filter((x, i) => i % 2 != 0)
            .map(x => x * 2)
            .reverse()
            .join(" ")
    );
}
processOddNumber([3, 0, 10, 4, 7, 3]);