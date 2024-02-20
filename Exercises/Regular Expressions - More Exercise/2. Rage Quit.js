function rageQuit(input) {
    let str = "";
    let globalPattern = /[\D]+([0-9]+)/g;
    input = input.shift().match(globalPattern);
    if (input !== null) {
        let pattern = /([\D]+)([0-9]+)/;
        for (let i = 0; i < input.length; i++) {
            let result = input[i].match(pattern);
            let sub = result[1].toUpperCase();
            let count = result[2];
            str += sub.repeat(count);
        }
        let reduced = Array.from(new Set(str));
        console.log(`Unique symbols used: ${reduced.length}`);
        console.log(str);
    }
}
// rageQuit("a3");
rageQuit("aSd2&5s@1");