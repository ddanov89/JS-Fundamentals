function flightSchedule(arr) {

    let flightObj = {};

    let flightsArr = arr
        .shift()
        .map(el => {
            let elArr = el.split(" ");
            if (elArr.length > 2) {
                elArr[1] = elArr[1] + " " + elArr[2];
                elArr.pop();
            }
            flightObj[elArr[0]] = elArr[1];
            return elArr;
        });

    let flightChanges = arr
        .shift()
        .map(element => {
            let flightInfo = element.split(" ");
            flightInfo.pop();
            return flightInfo[0];
        });
    let command = arr.shift();
    let destination = Object.entries(flightObj);
    for (let [key, value] of destination) {
        if (command == "Cancelled" && flightChanges.includes(key)) {
            console.log(`{ Destination: '${value}', Status: 'Cancelled' }`);
        } else if (command == "Ready to fly" && !flightChanges.includes(key)) {
            console.log(`{ Destination: '${value}', Status: 'Ready to fly' }`);
        }
    }
}
// flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'], ['Cancelled']]);
flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'], ['Ready to fly']]);