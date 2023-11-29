function pirates(arr) {

    let towns = new Map();
    let command = arr.shift();

    while (command != "Sail") {
        let [name, cityPopulation, cityGold] = command.split("||");
        if (towns.has(name)) {
            let town = towns.get(name);
            town.population += Number(cityPopulation);
            town.gold += Number(cityGold);
        } else {
            let town = {
                name: name,
                population: Number(cityPopulation),
                gold: Number(cityGold),
            };
            towns.set(name, town);
        }
        command = arr.shift();
    }
    command = arr.shift();
    while (command != "End") {
        let commandInfo = command.split("=>");
        let town = towns.get(commandInfo[1]);

        if (commandInfo[0] == "Plunder") {
            town.population -= Number(commandInfo[2]);
            town.gold -= Number(commandInfo[3]);
            console.log(`${commandInfo[1]} plundered! ${commandInfo[3]} gold stolen, ${commandInfo[2]} citizens killed.`);
            if (town.population <= 0 || town.gold <= 0) {
                towns.delete(town.name);
                console.log(`${commandInfo[1]} has been wiped off the map!`);
            }
        } else if (commandInfo[0] == "Prosper") {
            if (commandInfo[2] < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                town.gold += Number(commandInfo[2]);
                console.log(`${commandInfo[2]} gold added to the city treasury. ${commandInfo[1]} now has ${town.gold} gold.`);
            }
        }
        command = arr.shift();
    }
    if (towns.size == 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${towns.size} wealthy settlements to go to:`);
        for (let [name, town] of towns) {
            console.log(`${name} -> Population: ${town.population} citizens, Gold: ${town.gold} kg`);
        }
    }
}
// pirates(["Tortuga||345000||1250", "Santo Domingo||240000||630", "Havana||410000||1100", "Sail","Plunder=>Tortuga=>75000=>380","Prosper=>Santo Domingo=>180","End"]);
pirates(["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"]);