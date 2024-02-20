function picollo(arr) {

    let parkingLot = {};

    for (let item of arr) {

        let [direction, carPlate] = item.split(", ");
        parkingLot[carPlate] = direction;
    }
    let entries = Object.entries(parkingLot);

    for (let [key, value] of entries) {
        if (value == "OUT") {
            delete parkingLot[key];
        }
    }
    if (Object.keys(parkingLot).length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let keys = Object.keys(parkingLot).sort();
        for (let key of keys) {
            console.log(key);
        }
    }
}
picollo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);
// picollo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);