function city(city) {
    let cityInfo = Object.entries(city);
    cityInfo.forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`);
    });
}
city({ name: "Plovdiv", area: 389, population: 1162358, country: "Bulgaria", postCode: "4000" });