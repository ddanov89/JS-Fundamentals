function makeADictionary(arr) {
    let dictionary = {};
    for (let i = 0; i < arr.length; i++) {
        let term = JSON.parse(arr[i]);
        let entries = Object.entries(term);
        for (let [key, value] of entries) {
            dictionary[key] = value;
        }
    }
    let sortedObj = Object
        .keys(dictionary)
        .sort()
        .reduce((accumulator, key) => {
            accumulator[key] = dictionary[key];
            return accumulator;
        }, {});
        let entries = Object.entries(sortedObj);
        for (let [key, values] of entries) {
            console.log(`Term: ${key} => Definition: ${values}`);
        }
}
makeADictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}', '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container forheating water."}', '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}', '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);