function replaceRepeatingChars(str) {
    let noRepString = "";
    let prevChar = "";

    for (let curChar of str) {
        if (curChar !== prevChar) {
            noRepString += curChar;
            prevChar = curChar;
        }
    }
    console.log(noRepString);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');