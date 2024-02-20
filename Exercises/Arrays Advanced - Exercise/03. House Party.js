function houseParty(arr) {

    let guest = [];

    for (const command of arr) {

        let tokens = command.split(" ");
        let name = tokens[0];

        if (tokens.includes("not")) {
            if (guest.includes(name)) {
                let index = guest.indexOf(name);
                guest.splice(index, 1);
            }else{
                console.log(`${name} is not in the list!`);
            }
        } else {

            if (guest.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guest.push(name);
            }
        }
    }
    console.log(guest.join("\n"));
}
// houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);