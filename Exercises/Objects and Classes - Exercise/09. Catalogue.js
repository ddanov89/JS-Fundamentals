function catalogue(arr) {
    let product = {};
    let categories = new Map();

    for (let tokens of arr) {
        let [name, price] = tokens.split(" : ");
        product = {
            name: name,
            price: price,
        }
        if (categories.has(name[0])) {
            categories.get(name[0]).push(product);
        } else {
            categories.set(name[0], new Array(product));
        }
    }
    let sortedKeys = Array.from(categories.keys()).sort((a, b)=> a.localeCompare(b)); 
    for (let key of sortedKeys) {
        console.log(key);
        let products = categories.get(key).sort((a, b) => a.name.localeCompare(b.name));
        products.forEach(product => console.log(`${product.name}: ${product.price}`));
    }
}
// catalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
catalogue(['Omlet : 5.4', 'Shirt : 15', 'Cake : 59']);