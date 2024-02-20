function daemons(arr) {
 
    let healthRegEx = /[^\d\+\-\*\/\.]/ig;
    let dammageRegEx = /([+-]?[0-9]+\.?[0-9]*)/gi;
    let operatorsRegEx = /[\*\/]/gi;
 
    let daemons = [];
 
    arr
        .shift()
        .split(/[, ]+/g)
        .forEach(daemon => {
            let daemonHealth = healthCheck(healthRegEx, daemon);
            let daemonDammage = dammageCheck(dammageRegEx, operatorsRegEx, daemon);
            daemons.push(`${daemon} - ${daemonHealth} health, ${daemonDammage.toFixed(2)} damage`);
        });
 
    return daemons.sort((a, b) => a[0].localeCompare(b[0])).join('\n');
 
    function healthCheck(arg, str) {
        let num = 0;
        if (arg.test(str)) {
            num = str
                .match(arg)
                .map(char => char.charCodeAt(0))
                .map(Number).reduce((a, b) => a + b);
        }
        return num;
 
    }
 
    function dammageCheck(firstArg, secondArg, str) {
        let operators = [];
        let points = 0;
        if (firstArg.test(str)) {
            points = str.match(firstArg).map(Number).reduce((a, b) => a + b);
        }
        if (secondArg.test(str)) {
            operators = str.match(secondArg);
        }
        if (operators.length > 0) {
            operators.forEach(op => op === "*" ? points *= 2 : points /= 2);
        }
        return points;
    }
}
 
console.log(daemons([""]))
 
console.log(daemons(['Mph-0.5s-0.5t0.0**']));
// M3ph-0.5s-0.5t0.0** - 524 health, 8.00 damage
console.log(daemons(['M3ph1st0**, Azazel']));
//Azazel - 615 health, 0.00 damage 
//M3ph1st0** - 524 health, 16.00 damage
console.log(daemons(['Gos/ho']));
//Gos/ho - 512 health, 0.00 damage
