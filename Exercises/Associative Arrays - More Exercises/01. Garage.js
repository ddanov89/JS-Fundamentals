/* create an object garage
iterate through the initial array
 declare garage number car information by split " - "
create new array from carInformation by splitting ", "
create empty object of car
iterate through each element of object by splitting ": "
update object key token[0] and value token[1]
check if garageInfo includes 
*/
function garage(arr) {

    let garageInfo = {};

    for (let item of arr) {

        let [garageNumber, carInformation] = item.split(" - ");

        let carPropertiesArr = carInformation.split(", ");
        let carObj = {};

        carPropertiesArr.forEach(element => {
            let token = element.split(": ");
            carObj[token[0]] = token[1];
        });
        if (!garageInfo.hasOwnProperty(garageNumber)) {
            garageInfo[garageNumber] = [];
            garageInfo[garageNumber].push(carObj);
        } else {
            garageInfo[garageNumber].push(carObj);
        }
    }
    let result = "";
    let entries = Object.entries(garageInfo);
    for (let [key, value] of entries) {
        console.log(`Garage № ${key}`);
        for (let object of value) {
            result = "--- "
            for (let [type, property] of Object.entries(object)) {
                result += `${type} - ${property}, `;
            }
           result = result.slice(0, -2);
            console.log(result);
        }
    }
}
// garage(['1 - color: blue, fuel type: diesel',
//     '1 - color: red, manufacture: Audi',
//     '2 - fuel type: petrol',
//     '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
garage(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']);