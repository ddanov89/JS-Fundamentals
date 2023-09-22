function rightPlace(word, symbol, match){
    let result = "";
    for ( let i = 0; i < word.length; i++){
        if (word[i] == "_"){
            result += symbol;
        }else {
            result += word[i];
        }
    }
    if (result == match){
        console.log("Matched");
    }else {
        console.log("Not Matched");
    }
}
rightPlace('Str_ng', 'I', 'Strong');




// function rightPlace(str, symbol, result) {
 //let res = str.replace( "_", symbol);
    //let output = res === result? "Matched": "Not matched";
    //console.log(output); 
//}
//rightPlace('Str_ng', 'I', 'Strong');