function tseamAccount(inputArray) {
    let accountArray = inputArray[0].split(" ");
    let index = 1;
    while (inputArray[index] != 'Play!') {
        let commandArray = inputArray[index].split(" ");
        if ( commandArray[0] == "Install" ){
            if (!accountArray.includes(commandArray[1])) {
                accountArray.push(commandArray[1]);
            }
        }else if ( commandArray[0] == "Uninstall"){
            if (accountArray.includes(commandArray[1])) {
                let elementIndex = accountArray.indexOf(commandArray[1]);
                accountArray.splice(elementIndex, 1);
            }
        }else if ( commandArray[0] == "Update"){
            if (accountArray.includes(commandArray[1])) {
                let updateGameIndex = accountArray.indexOf(commandArray[1]);
               let updateGame = accountArray.splice(updateGameIndex, 1);
               accountArray.push(updateGame);
            }
        }else {
            let gameWithExpansion = commandArray[1].split("-");
            if (accountArray.includes(gameWithExpansion[0])) {
                let gameIndex = accountArray.indexOf(gameWithExpansion[0]);
                accountArray.splice(gameIndex + 1, 0, gameWithExpansion.join(":"));
            }
        }
        index++;
    }
    console.log(accountArray.join(" "));
}
// tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseamAccount(['CS WoW Diablo',

'Uninstall XCOM',

'Update PeshoGame',

'Update WoW',

'Expansion Civ-V',

'Play!']);