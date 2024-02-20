function needForSpeed3(arr) {

    let numberOfCars = Number(arr.shift());
    let endCommand = arr.pop();

    let cars = new Map();

    for (let i = 0; i < numberOfCars; i++) {
        let [name, mileage, fuel] = arr.shift().split("|");
        let car = {
            name: name,
            mileage: Number(mileage),
            fuel: Number(fuel),
        }
        cars.set(name, car);
    }
    for (let tokens of arr) {
        let commandInfo = tokens.split(" : ");
        if (commandInfo[0] == "Drive") {
            let car = cars.get(commandInfo[1]);
            if (Number(commandInfo[3]) <= car.fuel) {
                car.mileage += Number(commandInfo[2]);
                car.fuel -= Number(commandInfo[3]);
                console.log(`${commandInfo[1]} driven for ${commandInfo[2]} kilometers. ${commandInfo[3]} liters of fuel consumed.`);
                if (car.mileage >= 100000) {
                    cars.delete(commandInfo[1]);
                    console.log(`Time to sell the ${car.name}!`);
                }
            } else {
                console.log("Not enough fuel to make that ride");
            }
        } else if (commandInfo[0] == "Refuel") {
            let car = cars.get(commandInfo[1]);
            let litersToFullCapacity = 75 - car.fuel;
            if (Number(commandInfo[2] >= litersToFullCapacity)) {
                car.fuel += litersToFullCapacity;
                console.log(`${car.name} refueled with ${litersToFullCapacity} liters`);
            } else {
                car.fuel += Number(commandInfo[2]);
                console.log(`${car.name} refueled with ${Number(commandInfo[2])} liters`);
            }
        } else if (commandInfo[0] == "Revert") {
            let car = cars.get(commandInfo[1]);
            car.mileage -= Number(commandInfo[2]);
            if (car.mileage < 10000) {
                car.mileage = 10000;
            }else {
                console.log(`${car.name} mileage decreased by ${Number(commandInfo[2])} kilometers`);
            }
        }
    }
    for (let [carName, car] of cars) {
        console.log(`${carName} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`);
    }
}
// needForSpeed3(['3', 'Audi A6|38000|62', 'Mercedes CLS|11000|35', 'Volkswagen Passat CC|45678|5', 'Drive : Audi A6 : 543 : 47', 'Drive : Mercedes CLS : 94 : 11', 'Drive : Volkswagen Passat CC : 69 : 8', 'Refuel : Audi A6 : 50', 'Revert : Mercedes CLS : 500', 'Revert : Audi A6 : 30000', 'Stop']);
needForSpeed3(['4','Lamborghini Veneno|11111|74','Bugatti Veyron|12345|67','Koenigsegg CCXR|67890|12','Aston Martin Valkryie|99900 50','Drive : Koenigsegg CCXR : 382 : 82','Drive : Aston Martin Valkryie : 99 : 23','Drive : Aston Martin Valkryie : 2 : 1','Refuel : Lamborghini Veneno : 40','Revert : Bugatti Veyron : 2000','Stop']);