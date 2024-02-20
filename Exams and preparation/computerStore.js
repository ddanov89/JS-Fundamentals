/*function computerStore(array) {

    let customerType = array.pop();

    let totalPriceWithoutTaxes = array
    .map((element) => Number(element))
    .filter((element) => {
            if (element >= 0) {
                return element;
            } else {
                console.log("Invalid price!");
            }
        })
        .reduce((a, b) => a + b, 0);

    let taxes = totalPriceWithoutTaxes * 0.20;
    let totalPrice = customerType == "special" ? (totalPriceWithoutTaxes + taxes) * 0.90 : totalPriceWithoutTaxes + taxes;
    if (totalPrice == 0) {
        console.log("Invalid order!");
    } else {
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${totalPrice.toFixed(2)}$`);
    }
}*/
// computerStore([1050, 200, 450, 2, 18.50, 16.86, "special"]);
// computerStore(["regular"]);
function computerStore(arr) {

    let totalWithoutTax = 0;
    let taxes = 0;
 
    let command = arr.pop();
 
    if (arr.length == 0){
        console.log("Invalid order!");
            return;
    }
 
    for (let currRecipe = 0; currRecipe < arr.length; currRecipe++) {
        let recipe = Number(arr[currRecipe]);
        if (recipe < 0) {
            console.log("Invalid price!");

        } else {
            totalWithoutTax += recipe;
 
        }
    }
    taxes += totalWithoutTax * 0.20;
    let totalPrice = totalWithoutTax + taxes;
 
    if (command == "special") {
         totalPrice *= 0.90;
    }
    if(totalPrice == 0){
        console.log("Invalid order!");
    }else {
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalWithoutTax.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${(totalPrice).toFixed(2)}$`);
    }
}
computerStore([1050, 200, 450, 2, 18.50, 16.86, "special"]);
// computerStore(["regular"]);