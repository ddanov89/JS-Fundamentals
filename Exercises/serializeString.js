function serializeString(arr) {

    let serializedMap = new Map();

    let stringArr = arr[0].split("");
    for (let i = 0; i < stringArr.length; i++) {
        if (serializedMap.has(stringArr[i])) {
            let valueString = serializedMap.get(stringArr[i])
            serializedMap.set(stringArr[i], valueString + "/" + i);
        }else {
            serializedMap.set(stringArr[i], i.toString());
        }
    }
    for (let [char, index] of serializedMap.entries()) {
        console.log(`${char}:${index}`);
    }
}
// serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);