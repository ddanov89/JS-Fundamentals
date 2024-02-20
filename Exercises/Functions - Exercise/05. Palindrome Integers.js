function palindromeIntegers(array) {
    for (let num of array) {
        let isPalindrome = checkIsPalindrome(num);
        console.log(isPalindrome);
    }
    function checkIsPalindrome(num) {

        let numStr = num.toString();
        let reverseNumStr = "";

        for (let i = numStr.length - 1; i >= 0; i--) {
            let curChar = numStr[i];
            reverseNumStr += curChar;
        }
        let isPalindrome = numStr == reverseNumStr;
        return isPalindrome;
    }
}
palindromeIntegers([123, 323, 421, 121]);
/*
function palindromeIntegers(array) {
    for (let num of array) {
        let reverseNumStr = num.toString().split("").reverse().join("");
        console.log(num == reverseNumStr);
    }
}
palindromeIntegers([32, 2, 232, 1010]);*/