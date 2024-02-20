function formatGrade(grade) {
    let label;
    if (grade < 3) {
        label = "Fail";
        grade = 2;
       // console.log("Fail (2)");
    }else {
        if (grade < 3.5){
            label = "Poor";
        }else if ( grade < 4.5){
            label = "Good";
        }else if ( grade < 5.5){
            label = "Very good";
        }else {
            label = "Excellent";
        }
        grade = grade.toFixed(2);
    }
    console.log(`${label} (${grade})`);
}
formatGrade(3.33);
formatGrade(2.49);
formatGrade(5.75);
