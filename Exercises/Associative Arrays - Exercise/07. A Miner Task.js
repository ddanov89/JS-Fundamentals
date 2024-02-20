function aMinerTask(arr) {

    let resources = {};

    for (let i = 0; i < arr.length; i += 2) {

        let resource = arr[i];
        let qty = Number(arr[i + 1]);

        if (resource in resources) { // if(resources.hasOwn(resource)){}
            resources[resource] += qty;
        } else {
            resources[resource] = qty;
        }
    }

    let entries = Object.entries(resources);
    
    for (let [resource, qty] of entries) {
        console.log(`${resource} -> ${qty}`);
    }
}
aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
// aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);