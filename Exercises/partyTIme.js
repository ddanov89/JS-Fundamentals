function partyTime(arr) {

    let index = arr.indexOf("PARTY");
    let invited = arr.slice(0, index);
    let guests = arr.slice(index + 1, arr.length);
    
    for (let i = 0; i < guests.length; i++) {
        if (invited.includes(guests[i])) {
            let invitedIndex = invited.indexOf(guests[i]);
            invited.splice(invitedIndex, 1);
        }
    }
    
    let vip = [];
    let regular = [];

    for (let i = 0; i < invited.length; i++) {
        if (invited[i][0] >= '0' && invited[i][0] <= '9') {
            vip.push(invited[i]);
        }else {
            regular.push(invited[i]);
        }
    }
    console.log(invited.length);
    vip.forEach(element => {
        console.log(element);
    });
    regular.forEach(element => {
        console.log(element);
    });
}
partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);
// partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']);