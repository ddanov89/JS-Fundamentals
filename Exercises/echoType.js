function echoType(word) {
    let type = typeof word;
    console.log(type);
    if (type == "string" || type == "number"){
        console.log(word);
    }else {
        console.log('Parameter is not suitable for printing');
    }
}
echoType(null);