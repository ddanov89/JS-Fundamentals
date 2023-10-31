function schoolRegister(arr) {

    let students = [];

    let studentArr = arr.map(element => {
        let studentInformation = element.split(", ").map(item => item.split(": "));
        return studentInformation;
    });
    studentArr.forEach(element => {
        let student = {
            studentName: element[0][1],
            studentGrade: Number(element[1][1]),
            studentAvgScore: Number(element[2][1]),
        }
        students.push(student);
    });
    students = students.sort((a, b) => a.studentGrade - b.studentGrade)
        .filter(student => student.studentAvgScore >= 3);

    let summaryScore = 0;
    let studentCount = 0;
    let studentNames = [];

    let grade = students[0].studentGrade;

    for (let i = 0; i < students.length; i++) {
        if (students[i].studentGrade == grade) {

            summaryScore += students[i].studentAvgScore;
            studentCount++;
            studentNames.push(students[i].studentName);
            if (i == students.length - 1) {
                console.log(`${grade + 1} Grade`);
                console.log(`List of students: ${studentNames.join(", ")}`);
                console.log(`Average annual score from last year: ${(summaryScore / studentCount).toFixed(2)}`);
                console.log("");
            }
        } else {

            console.log(`${grade + 1} Grade`);
            console.log(`List of students: ${studentNames.join(", ")}`);
            console.log(`Average annual score from last year: ${(summaryScore / studentCount).toFixed(2)}`);
            console.log("");

            summaryScore = 0;
            summaryScore += students[i].studentAvgScore;
            studentCount = 1;
            studentNames = [];
            studentNames.push(students[i].studentName);
            grade = students[i].studentGrade;

            if (i == students.length - 1) {
                console.log(`${grade + 1} Grade`);
                console.log(`List of students: ${studentNames.join(", ")}`);
                console.log(`Average annual score from last year: ${(summaryScore / studentCount).toFixed(2)}`);
                console.log("");
            }
        }
    }
}
// schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);
schoolRegister(['Student name: George, Grade: 5, Graduated with an average score: 2.75',
'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
'Student name: John, Grade: 9, Graduated with an average score: 2.90',
'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15']);