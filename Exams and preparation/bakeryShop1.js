function bakeryShop(arr) {

    let endCommand = arr.pop();
    let products = new Map();
    let soldCount = 0;

    for (let tokens of arr) {
        let commandInfo = tokens.split(" ");
        if (commandInfo[0] == "Receive") {
            let quantity = Number(commandInfo[1]);
            let name = commandInfo[2];
            if (!products.has(name)) {
                products.set(name, quantity);
            }
        } else if (commandInfo[0] == "Sell") {
            let quantity = Number(commandInfo[1]);
            let name = commandInfo[2];
            if (!products.has(name)) {
                console.log(`You do not have any ${name}.`);
            } else {
                if (products.get(name) < quantity) {
                    let availableQuantity = products.get(name);
                    products.get(name) -= quantity;
                    products.delete(name);
                    console.log(`There aren't enough ${name}. You sold the last ${availableQuantity} of them.`);
                } else {
                    let availableQuantity = products.get(name);
                    products.set(name, availableQuantity - quantity);
                    soldCount += quantity;
                    console.log(`You sold ${quantity} ${name}.`);
                    if (products.get(name) <= 0) {
                        products.delete(name);
                    }
                }
            }
        }
    }
    for (let [name, quantity] of products.entries()) {
        console.log(`${name} : ${quantity}`);
    }
    console.log(`All sold: ${soldCount} goods`);
}
bakeryShop(["Receive 105 cookies ", "Receive 10 donuts ", "Sell 10 donuts ", "Sell 1 bread ", "Complete "]);
// bakeryShop(["Receive 10 muffins ", "Receive 23 bagels ", "Sell 5 muffins ", "Sell 10 bagels ", "Complete "]);