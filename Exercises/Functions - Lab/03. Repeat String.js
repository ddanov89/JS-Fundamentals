function returnString(string, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += string;
    }
    return result;
}
console.log(returnString("abc", 3));