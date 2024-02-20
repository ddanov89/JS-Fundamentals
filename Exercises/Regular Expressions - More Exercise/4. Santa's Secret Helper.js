function santaSSecretHelper(arr) {
    let key = Number(arr.shift());
    let decryptArr = [];
    let template = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<behavior>[G|N])!/;

    for (let input of arr) {
        let strAfterDecrypt = '';

        if (input !== 'end') {
            for (let tokens of input) {
                let checkLetter = tokens.charCodeAt() - key;
                let decryptLetter = String.fromCharCode(checkLetter);
                strAfterDecrypt += decryptLetter;
            }

            decryptArr.push(strAfterDecrypt);
        }
    }

    let printArr = [];

    for (let element of decryptArr) {
        let match = element.match(template);

        if (match === null) {
            continue;
        }
        let name = match.groups.name;
        let behavior = match.groups.behavior;

        if (behavior === 'G') {
            printArr.push(name);
        }
    }

    console.log(printArr.join('\n'));
}
// santaSSecretHelper(['3', 'CNdwhamigyenumje$J$', 'CEreelh-nmguuejnW$J$', 'CVwdq&gnmjkvng$Q$', 'end']);
// santaSSecretHelper(['3', 'N}eideidmk$'(mnyenmCNlpamnin$J$', 'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge', 'ppqmkkkmnolmnnCEhq/vkievk$Q$', 'yyegiivoguCYdohqwlqh/kguimhk$J$', 'end']);
santaSSecretHelper([4, "~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%", "0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf", ";:<lyiljz{onzDPere=;=9<;8=rhknlf%K%", "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn', 'DReh}e=<4lhzj1%K%", "end"]);