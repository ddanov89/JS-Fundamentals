function deckOfCards(arr) {

    let deck = arr
        .shift()
        .split(", ");

    let num = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {

        let command = arr[i].split(", ");

        if (command[0] == "Add") {
            
            if (deck.includes(command[1])) {
                console.log("Card is already in the deck");
            } else {
                deck.push(command[1]);
                console.log("Card successfully added");
            }
        } else if (command[0] == "Remove") {

            if (!deck.includes(command[1])) {
                console.log("Card not found");
            } else {
                let index = deck.indexOf(command[1]);
                deck.splice(index, 1);
                console.log("Card successfully removed");
            }
        } else if (command[0] == "Remove At") {

            if (!(Number(command[1]) >= 0 && Number(command[1]) < deck.length)) {
                console.log("Index out of range");
            } else {
                deck.splice(Number(command[1]), 1);
                console.log("Card successfully removed");
            }
        } else if (command[0] == "Insert") {

            if (!(Number(command[1]) >= 0 && Number(command[1]) < deck.length)) {
                console.log("Index out of range");
            } else if (deck.includes(command[2])) {
                console.log("Card is already added");
            } else {
                deck.splice(Number(command[1]), 0, command[2]);
                console.log("Card successfully added");
            }
        }
    }
    console.log(deck.join(", "));
}
deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds"]);
// deckOfCards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts", "2", "Add, Two of Clubs", "Remove, Five of Hearts"]);
// deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"]);