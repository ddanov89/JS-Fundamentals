function softuniStudents(arr) {

    let courses = [];
    let students = new Map();

    for (let tokens of arr) {
        if (tokens.includes(":")) {
            let [courseName, capacity] = tokens.split(": ");
            let coursesNames = courses.map(course => course.name);
            if (!coursesNames.includes(courseName)) {
                let courseObj = {
                    name: courseName,
                    capacity: Number(capacity),
                    studentCount: 0,
                };
                courses.push(courseObj);
            } else {
                for (let course of courses) {
                    if (course.name == courseName) {
                        course.capacity += Number(capacity);
                    }
                }
            }
        } else if (tokens.includes("joins")) {
            let [studentDetails, courseName] = tokens.split(" joins ");
            for (let course of courses) {
                if (course.name == courseName) {
                    if (course.capacity > course.studentCount) {
                        let [studentInfo, email] = studentDetails.split("] with email ");
                        let [userName, creditsCount] = studentInfo.split("[");
                        let studentObj = {
                            name: userName,
                            email: email,
                            credit: creditsCount,
                        };
                        if (students.has(courseName)) {
                            students.get(courseName).push(studentObj);
                        } else {
                            students.set(courseName, new Array(studentObj));
                        }
                        course.studentCount++;
                    }
                }
            }
        }
    }
    let sortedCourses = courses.sort((a, b) => b.studentCount - a.studentCount);
    for (let course of sortedCourses) {
        console.log(`${course.name}: ${course.capacity - course.studentCount} places left`);
        if (students.has(course.name)) {
            let courseStudents = students.get(course.name);
            let sortedStudents = courseStudents.sort((a, b) => b.credit - a.credit);
            for (let student of sortedStudents) {
                console.log(`--- ${student.credit}: ${student.name}, ${student.email}`);
            }
        }
    }
}
// softuniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2 @user.com joins C#Basics', 'user13[50] with email user13 @user.com joins JSCore', 'user1[25] with email user1 @user.com joins JSCore', 'user8[18] with email user8 @user.com joins C#Advanced', 'user6[85] with email user6 @user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11 @user.com joins JavaBasics', 'user45[105] with email user45 @user.com joins JSCore', 'user007[20] with email user007 @user.com joins JSCore', 'user700[29] with email user700 @user.com joins JSCore', 'user900[88] with email user900 @user.com joins JSCore']);
softuniStudents(['JavaBasics: 15', 'user1[26] with email user1@user.com joins JavaBasics', 'user2[36] with email user11@user.com joins JavaBasics', 'JavaBasics: 5', 'C#Advanced: 5', 'user1[26] with email user1@user.com joins C#Advanced', 'user2[36] with email user11@user.com joins C#Advanced', 'user3[6] with email user3@user.com joins C#Advanced', 'C#Advanced: 1', 'JSCore: 8', 'user23[62] with email user23@user.com joins JSCore']);