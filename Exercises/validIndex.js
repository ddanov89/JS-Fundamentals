function isValid(index, arr) {
    if (Number.isInteger(index) && index >= 0 && index < arr.length) {
    return true;
    } else {
    return false;
    }
   }
   console.log(isValid(1, [1, 2, 3]));
   console.log(isValid(-1, [1, 2, 3]));