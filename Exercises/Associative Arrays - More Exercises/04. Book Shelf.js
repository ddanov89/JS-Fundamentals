function bookShelf(arr) {

    let shelves = [];
    let books = [];

    for (let tokens of arr) {
        if (tokens.includes("->")) {
            let [shelfId, shelfGenre] = tokens.split(" -> ");

            let shelfIds = shelves.map(shelf => shelf.id);

            if (!shelfIds.includes(shelfId)) {
                let shelfObj = {
                    id: shelfId,
                    genre: shelfGenre,
                    bookCount: 0,
                };

                shelves.push(shelfObj);

            }
        }
        else if (tokens.includes(":")) {
            let [bookInfo, genre] = tokens.split(", ");

            for (let shelf of shelves) {
                if (shelf.genre == genre) {
                    shelf.bookCount++;

                    let [bookTitle, bookAuthor] = bookInfo.split(": ");
                    let book = {
                        title: bookTitle,
                        author: bookAuthor,
                        genre: genre,
                    };
                    books.push(book);
                }
            }
        }
    }
    let sortedShelves = shelves.sort((a,b) => b.bookCount - a.bookCount);
    let sortedBooks = books.sort((a,b) => a.title.localeCompare(b.title));
    for (let shelf of sortedShelves) {
        console.log(`${shelf.id} ${shelf.genre}: ${shelf.bookCount}`);
        let booksOfTheShelf = sortedBooks.filter(book => book.genre == shelf.genre);
        for (let book of booksOfTheShelf) {
            console.log(`--> ${book.title}: ${book.author}`);
        }
    }
}
// bookShelf(['1 -> mystery', '2 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Lions and Rats: Gabe Roads, history', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi']);
bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']);