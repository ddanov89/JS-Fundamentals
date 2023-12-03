function travelTime(arr) {

    let destinations = new Map();

    for (let i = 0; i < arr.length; i++) {
        let [country, cityName, travelCost] = arr[i].split(" > ");
        travelCost = Number(travelCost);
        let destination = new Map();
        destination.set(cityName, travelCost);
        if (destinations.has(country)) {
            if (destinations.get(country).has(cityName)) {
                let existingTravelCost = destinations.get(country).get(cityName);
                if (existingTravelCost > travelCost) {
                    destinations.get(country).set(cityName, travelCost);
                }
            } else {
                destinations.get(country).set(cityName, travelCost);
            }
        } else {
            destinations.set(country, new Map(destination));
        }
    }
    let sortedByCountries = Array.from(destinations.keys()).sort((a, b) => a.localeCompare(b));
    for (let country of sortedByCountries) {
        let innerMap = destinations.get(country);
        let sortedByCost = [...innerMap.entries()].sort((a, b) => a[1] - b[1]);
        let result = '';
        result += `${country} ->`;
        for (let [destination, travelCost] of sortedByCost) {
            result += ` ${destination} -> ${travelCost} -> `;
            result = result.slice(0, -4);
        }
        console.log(result);
    }
}
travelTime(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000", "Albania > Tirana > 1000", "Bulgaria > Sofia > 200"]);
// travelTime(['Bulgaria > Sofia > 25000', 'Bulgaria > Sofia > 25000', 'Kalimdor > Orgrimar > 25000', 'Albania > Tirana > 25000', 'Bulgaria > Varna > 25010', 'Bulgaria > Lukovit > 10']);