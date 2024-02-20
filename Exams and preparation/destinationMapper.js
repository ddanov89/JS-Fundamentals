function destinationMapper(str) {

    let pattern = /(=|\/)[A-Z]{1}[A-Za-z]{2,}\1/g;
    let match = str.match(pattern);
    let travelPoints = 0;
    let destinations = [];
    if (pattern.test(str)) {
        match.forEach(element => {
            element = element.substring(1, element.length - 1);
            destinations.push(element);
            travelPoints += element.length;
        });
    }
    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}
// destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");