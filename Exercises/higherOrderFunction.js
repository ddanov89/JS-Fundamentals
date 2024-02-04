function aggregate(start, end, func) {
    for (let result = start, i = start + 1; i <= end; i++) {
        result = func(result, i);
        return result;
    }
}
aggregate(1, 10, (a, b) => a + b);
// aggregate( 1, 10, (a, b) => "" + a + b);