function travelTime(arr) {
    let destination = {};
    for (let command of arr) {
        let [country, town, cost] = command.split(" > ");
        cost = Number(cost);

        if (country in destination) {
            if (town in destination[country]) {
                if (cost < destination[country][town]) {
                    destination[country][town] = cost;
                }
            } else {
                destination[country][town] = cost;
            }
        } else {
            destination[country] = { [town]: cost };
        }
    }
    let entries = Object.entries(destination).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [country, towns] of entries) {
        let townEntries = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        let result = `${country} -> `;
        for (let [town, cost] of townEntries) {
            result += `${town} -> ${cost} `;
        }
        console.log(result);
    }
}
// travelTime(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000", "Albania > Tirana > 1000", "Bulgaria > Sofia > 200"]);
travelTime(['Bulgaria > Sofia > 25000', 'Bulgaria > Sofia > 25000', 'Kalimdor > Orgrimmar > 25000', 'Albania > Tirana > 25000', 'Bulgaria > Varna > 25010', 'Bulgaria > Lukovit > 10']);