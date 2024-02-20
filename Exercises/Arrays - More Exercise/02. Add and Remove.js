function addAndRemove(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if ( array[i] == "add"){
            newArray.push(i + 1);
        }else if (array[i] == "remove"){
            newArray.pop();
        }
    }
    if ( newArray.length > 0){
        console.log(newArray.join(" "));
    }else {
        console.log("Empty");
    }
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);