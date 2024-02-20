function shoppingList(arr) {
    let shoppingList = arr[0].split("!");
    let index = 1;
    while (arr[index] != "Go Shopping!") {
        let commandArray = arr[index].split(" ");
        if (commandArray[0] == "Urgent") {
            if (!shoppingList.includes(commandArray[1])) {
                shoppingList.unshift(commandArray[1]);
            }
        } else if (commandArray[0] == "Unnecessary") {
            if (shoppingList.includes(commandArray[1])) {
                let indexShopping = shoppingList.indexOf(commandArray[1]);
                shoppingList.splice(indexShopping, 1);
            }
        } else if (commandArray[0] == "Correct") {
            if (shoppingList.includes(commandArray[1])) {
                let indexShopping = shoppingList.indexOf(commandArray[1]);
                shoppingList.splice(indexShopping, 1, commandArray[2]);
            }
        } else if (commandArray[0] == "Rearrange") {
            if (shoppingList.includes(commandArray[1])) {
                let indexShopping = shoppingList.indexOf(commandArray[1]);
                shoppingList.splice(indexShopping, 1);
                shoppingList.push(commandArray[1]);
            }
        }
        index++;
    }
    console.log(shoppingList.join(", "));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana","Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]);
// shoppingLIst(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);