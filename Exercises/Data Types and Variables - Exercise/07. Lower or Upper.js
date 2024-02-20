function lowerOrUppercase(letter) {
    let code = letter.charCodeAt();
    if ( code >= 65 && code <= 90){
        console.log('upper-case');
    }else {
        console.log('lower-case');
    }
}
lowerOrUppercase('L');

function lowerOrUppercase(letter) {
    if (letter === letter.toLowerCase()){
        console.log('lower-case');
    }else {
        console.log('upper-case');
    }
}
lowerOrUppercase('L');

function lowerOrUppercase(letter) {
    console.log(letter.toUpperCase() === letter ? "upper-case" : "lower-case");
}
lowerOrUppercase('L');