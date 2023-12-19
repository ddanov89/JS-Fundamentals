function orders(drinkType, quantity) {
    let drinksPrice = {
        "coffee": quantity => 1.50 * quantity,
        "water": quantity => 1.00 * quantity,
        "coke": quantity => 1.40 * quantity,
        "snacks": quantity => 2.00 * quantity
    };
    let order = drinksPrice[drinkType];
    console.log((order(quantity).toFixed(2)));
}
orders("water", 5);