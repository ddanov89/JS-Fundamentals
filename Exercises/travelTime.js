function travelTime(input) {
    
    let countries = {};

    input.forEach(element => {
        let [country, town, currentPrice] = element.split(" > ");
        currentPrice = Number(currentPrice);
        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
            countries[country][town] = currentPrice;
        } else {
            let countryObj = countries[country];
            if (!countryObj.hasOwnProperty(town)) {
                countryObj[town] = currentPrice;
            } else {
                let oldPrice = countryObj[town];
                if (oldPrice > currentPrice) {
                    countryObj[town] = currentPrice;
                }
            }
        }
    });
    let sortedCountries = Object.entries(countries)
        .sort(sortCountries);

    for (let [name, towns] of sortedCountries) {
        let sortedTowns = Object.entries(towns).sort(sortTowns);
        let output = `${name} -> `;
        for (const [townName, townPrice] of sortedTowns) {
            output += `${townName} -> ${townPrice} `;
        }
        console.log(output);
    }

    function sortCountries(firstCountry, secondCountry) {
        let firstName = firstCountry[0];
        let secondName = secondCountry[0];

        return firstName.localeCompare(secondName);
    }

    function sortTowns(firstTown, secondTown) {
        let firstPrice = firstTown[1];
        let secondPrice = secondTown[1];

        return firstPrice - secondPrice;
    }
}
// travelTime(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000", "Albania > Tirana > 1000", "Bulgaria > Sofia > 200"]);
travelTime(['Bulgaria > Sofia > 25000', 'Bulgaria > Sofia > 25000', 'Kalimdor > Orgrimmar > 25000', 'Albania > Tirana > 25000', 'Bulgaria > Varna > 25010', 'Bulgaria > Lukovit > 10']);