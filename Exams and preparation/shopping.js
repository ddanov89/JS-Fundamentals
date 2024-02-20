function shopping(arr) {
    let notePadMap = new Map();
    let index = 0;
    let importantItemSet = new Set();
    let allItemsSet = new Set();

    while (arr[index] != "Go Shopping") {
        let commandInfo = arr[index].split("->");
        if (commandInfo[0] == "Add") {
            let storeName = commandInfo[1];
            let itemsArr = commandInfo[2].split(",");
            let itemsToAdd = [];
            itemsArr.forEach(element => {
                if (!allItemsSet.has(element)) {
                    itemsToAdd.push(element);
                    allItemsSet.add(element);
                }
            });
            if (!notePadMap.has(storeName)) {
                let store = {
                    storeName: storeName,
                    items: itemsToAdd,
                    importantItems: new Array(),
                };
                notePadMap.set(storeName, store);
            } else {
                let store = notePadMap.get(storeName);
                store.items.push(...itemsToAdd);
            }
        } else if (commandInfo[0] == "Important") {
            let storeName = commandInfo[1];
            let item = commandInfo[2];
            if (!allItemsSet.has(item)) {
                if (!notePadMap.has(storeName)) {
                    let store = {
                        storeName: storeName,
                        items: new Array(),
                        importantItems: new Array(item),
                    };
                    notePadMap.set(storeName, store);
                    importantItemSet.add(item);
                } else {
                    let store = notePadMap.get(storeName);
                    store.importantItems.unshift(item);
                }
                allItemsSet.add(item);
            }
        } else if (commandInfo[0] == "Remove") {
            let storeName = commandInfo[1];
            if (notePadMap.has(storeName)) {
                let store = notePadMap.get(storeName);
                if (store.importantItems.length == 0) {
                    notePadMap.delete(storeName);
                }
            }
        }
        index++;
    }
    for (let [storeName, store] of notePadMap.entries()) {
        console.log(`${storeName}:  `);
        store.importantItems.forEach(element =>
            console.log(`- ${element}`)
        );
        store.items.forEach(element =>
            console.log(`- ${element}`)
        );
    }
}
// shopping(["Add->Grocery->Dried-fruit,Nuts,Lemons", "Add->Market->Nuts,Juice", "Important->Market->Snack", "Remove->Market", "Go Shopping"]);
// shopping(["Add->Peak->Batteries,Umbrella", "Add->Groceries->Water,Juice,Food", "Add->Peak->Water", "Go Shopping"]);
shopping(["Add->Peak->Batteries,Umbrella",
"Add->Groceries->Water,Juice,Food",
"Add->Peak->Tent",
"Important->Groceries->Batteries",
"Remove->Store",
"Go Shopping"]);