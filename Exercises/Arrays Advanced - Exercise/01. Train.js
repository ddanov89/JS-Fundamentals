function train(arr) {

    let wagons = arr[0].split(' ').map(Number);
    let capacity = Number(arr[1]);

    for (let i = 2; i < arr.length; i++) {
        let command = arr[i];
        let tokens = command.split(' ');

        if (tokens[0] == 'Add') {
            let passengers = Number(tokens[1]);
            wagons.push(passengers);
        } else {
            let passengers = Number(tokens[0]);

            for (let index = 0; index < wagons.length; index++) {
                if (wagons[index] + passengers <= capacity) {
                    wagons[index] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75']);
train(['0 0 0 10 2 4',

    '10',

    'Add 10',

    '10',

    '10',

    '10',

    '8',

    '6']);