function deSerializeString(arr) {

    let command = arr.pop();
    let maxLength = 0;
    
    arr.forEach(element => {
        let lastIndexOfSlash = element.lastIndexOf("/");
        if (lastIndexOfSlash != -1) {
            let lastNumber = Number(element.substring(lastIndexOfSlash + 1));
            if (lastNumber > maxLength) {
                maxLength = lastNumber;
            }
        }
    });
    let resultArr = [];
    resultArr.length = maxLength + 1;

    arr.forEach(element => {
        let [char, indexes] = element.split(":");
        let indexArr = indexes.split("/").map(Number);
        indexArr.forEach(index => {
            resultArr.splice(index, 1, char);
        });
    });
    console.log(resultArr.join(""));
}
// deSerializeString(['a:0/2/4/6', 'b:1/3/5', 'end']);
deSerializeString(['a:0/3/5/11', 'v:1/4', 'j:2', 'm:6/9/15', 's:7/13', 'd:8/14', 'c:10', 'l:12', 'end']);