function bakeryShop(arr) {

    class Product {
        name;
        quantity;

        constructor(name, quality){
            this.name = name;
            this.quality = Number(quality);
        }
        Receive(tokens){
            let quantity = Number(tokens[1]);
            let name = tokens[2];
            if (!products.has(name)) {
                products.set(name, quantity);
            }
        }

        Sell(tokens){
            let quantity = Number(tokens[1]);
            let name = tokens[2];
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
    }

    let endCommand = arr.pop();
    let products = {};

    for (let tokens of arr) {
        let [quality, name] = arr.shift().split(" ");
        products[name] = new Product(quality, name);
    }
    for (let [name, quantity] of products.entries()) {
        console.log(`${name} : ${quantity}`);
    }
    console.log(`All sold: ${soldCount} goods`);
bakeryShop(["Receive 105 cookies ", "Receive 10 donuts ", "Sell 10 donuts ", "Sell 1 bread ", "Complete "]);
// bakeryShop(["Receive 10 muffins ","Receive 23 bagels ", "Sell 5 muffins ", "Sell 10 bagels ", "Complete "]);