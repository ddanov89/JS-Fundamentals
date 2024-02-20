function theLift(input) {

    let people = Number(input[0]);
    let wagonArray = input[1].split(" ").map((a) => Number(a));
    let wagonCapacity = wagonArray.length * 4;

    for (let i = 0; i < wagonArray.length; i++) {
        if (wagonArray[i] < 4 && people > 0) {
            let seatsToBeFilled = 4 - wagonArray[i];
            if (people >= seatsToBeFilled) {
                wagonArray[i] = 4;
            }else {
                wagonArray[i] = people;
            }
            people -= seatsToBeFilled;
        }
    }
    let filedSpots = wagonArray.reduce((a,b) => a + b, 0);
    if (people < 1 || filedSpots < wagonCapacity) {
        console.log('The lift has empty spots!');
    } else {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    console.log(wagonArray.join(" "));
}
theLift(["15", "0 0 0 0 0"]);
theLift(["20", "0 2 0"]);