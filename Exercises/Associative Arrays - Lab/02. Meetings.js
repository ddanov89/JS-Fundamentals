function meetings(arr) {
    let calendar = {};
    for (let item of arr) {
        let [day, name] = item.split(" ");
        if (calendar[day]) {
            console.log(`Conflict on ${day}!`);
            continue;
        }
        calendar[day] = name;
        console.log(`Scheduled for ${day}`);
    }
    let entries = Object.entries(calendar);
    for (let [day, name] of entries) {
        console.log(`${day} -> ${name}`);
    }
}
meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
// meetings(['Friday Bob', 'Saturday Ted','Monday Bill', 'Monday John', 'Wednesday George']);