function phoneBook(arr) {
    let phoneBook = {};
    for (let item of arr) {
       let [name, phoneNumber] = item.split(" ");
       phoneBook[name] = phoneNumber;
    }
    console.log(Object.entries(phoneBook).map(entry => entry.join(" -> ")).join("\n"));
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);
phoneBook(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);