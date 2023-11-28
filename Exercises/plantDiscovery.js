function plantDiscovery(arr) {

    let numberOfPlants = Number(arr.shift());
    let endCommand = arr.pop();

    let plants = new Map();

    for (let i = 0; i < numberOfPlants; i++) {
        let [name, rarity] = arr.shift().split("<->");
        let plant = {
            name: name,
            rarity: rarity,
            rating: new Array(),
        }
        plants.set(name, plant);

        plant = plants.get(name);

        if (plants.has(name)) {
            plant.rarity = rarity;
        }
    }

    for (let tokens of arr) {
        let commandInfo = tokens.split(": ");

        if (commandInfo[0] == "Rate") {
            let [name, rating] = commandInfo[1].split(" - ");
            if (!plants.has(name)) {
                console.log("error");
            } else {
                let plant = plants.get(name);
                plant.rating.push(Number(rating));
            }
        } else if (commandInfo[0] == "Update") {
            let [name, rarity] = commandInfo[1].split(" - ");
            if (!plants.has(name)) {
                console.log("error");
            } else {
                let plant = plants.get(name);
                plant.rarity = rarity;
            }
        } else if (commandInfo[0] == "Reset") {
            if (!plants.has(commandInfo[1])) {
                console.log("error");
            } else {
                let plant = plants.get(commandInfo[1]);
                plant.rating = [];
            }
        }
    }
    console.log("Plants for the exhibition: ");
    for (let [name, plant] of plants.entries()) {
        let ratingSum = plant.rating.reduce((acc, curV) => acc + curV, 0);
        let avgRating;
        if (plant.rating.length == 0) {
            avgRating = 0;
        } else {
            avgRating = ratingSum / plant.rating.length;
        }
        console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${(avgRating).toFixed(2)}`);
    }
}
// plantDiscovery(["3", "Arnoldii<->4", "Woodii<->7", "Welwitschia<->2", "Rate: Woodii - 10", "Rate: Welwitschia - 7", "Rate: Arnoldii - 3", "Rate: Woodii - 5", "Update: Woodii - 5", "Reset: Arnoldii", "Exhibition"]);
plantDiscovery(["2", "Candelabra<->10", "Oahu<->10", "Rate: Oahu - 7", "Rate: Candelabra - 6", "Exhibition"]);