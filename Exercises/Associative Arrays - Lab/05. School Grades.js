function schoolGrades(arr) {

    let student = {};

    for (let i = 0; i < arr.length; i++) {

        let studentInfo = arr[i].split(" ");
        let studentName = studentInfo.shift();
        let grades = studentInfo.map(Number);

        if (student.hasOwnProperty(studentName)) {
            student[studentName] = student[studentName].concat(grades);
        } else {
            student[studentName] = grades;
        }
    }

    let keys = Object.keys(student);
    keys.sort();
    
    for (let key of keys) {
        let grade = student[key].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let avg = grade / student[key].length;
        console.log(`${key}: ${avg.toFixed(2)}`);
    }
}
// schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
// schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);
schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven']);