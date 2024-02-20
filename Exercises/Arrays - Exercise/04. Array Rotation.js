function arrayRotation(array, rotationCount) {
    for (let rotation = 1; rotation <= rotationCount; rotation++){
       let firstElement = array.shift();
       array.push(firstElement);
    }
    console.log(array.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);