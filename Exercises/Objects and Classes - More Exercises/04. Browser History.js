function browserHistory(obj, commandArr) {

    for (let i = 0; i < commandArr.length; i++) {

        let command = commandArr[i].split(" ");

        if (command[0] == "Open") {
            obj['Open Tabs'].push(command[1]);
            obj["Browser Logs"].push(commandArr[i]);

        } else if (command[0] == "Close") {

            if (obj["Open Tabs"].includes(command[1])) {
                let index = obj["Open Tabs"].indexOf(command[1]);
                let removed = obj["Open Tabs"].splice(index, 1);
                obj["Recently Closed"].push(command[1]);
                obj["Browser Logs"].push(commandArr[i]);
            }

        } else if (command[0] == "Clear") {
            obj["Open Tabs"] = [];
            obj["Recently Closed"] = [];
            obj["Browser Logs"] = [];
        }
    }
    console.log(`${obj["Browser Name"]}`);
    console.log(`Open Tabs: ${obj["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${obj["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${obj["Browser Logs"].join(", ")}`);
}
// browserHistory({
// "Browser Name": "Google Chrome",
// "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
// "Recently Closed": ["Yahoo", "Gmail"],
// "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]},
// ["Close Facebook", "Open StackOverFlow", "Open Google"]);
browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);