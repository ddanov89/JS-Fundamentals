function bonusScoringSystem(input) {
    let arr = input.map(Number);
    arr.shift();
    let numberOfLectures = arr.shift();
    let additionalBonus = arr.shift();
    let totalBonus = 0;
    let attendance = 0;
    let maxBonus = 0;
    let maxAttendance = 0;
    
    for (let i = 0; i < arr.length; i++) {

        attendance = arr[i];
        totalBonus = attendance / numberOfLectures * (5 + additionalBonus);

        if (attendance > maxAttendance) {
            maxAttendance = attendance;
        }
        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);
// bonusScoringSystem(['5', '25', '30', '12', '19', '24','16', '20']);