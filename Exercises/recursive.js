function countDown(x) {
    console.log(x);
    if (x > 0) {
        countDown(x - 1);
    }
}
countDown(10);