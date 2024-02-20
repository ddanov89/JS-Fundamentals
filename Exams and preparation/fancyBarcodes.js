function fancyBarcodes(arr) {

    let numberOfBarcodes = Number(arr.shift());

    for (let i = 0; i < numberOfBarcodes; i++) {
        let productPattern = /(^@#{1,})([A-Z][A-Za-z\d]{4,}[A-Z]@#{1,})/g;
        let matchedBarcode = productPattern.exec(arr[i]); // return array

        if (matchedBarcode != null) {
            let digitPattern = /\d/g;
            if (digitPattern.test(matchedBarcode[0])) {
                let digits = digitPattern.exec(matchedBarcode[0]);
                // let digits = matchedBarcode[0].match(digitPattern);
                console.log(`Product group: ${digits.join("")}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log("Invalid barcode");
        }
    }
}
// fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
fancyBarcodes(["6", "@###Val1d1teM@###", "@#ValidIteM@#", "##InvaliDiteM##", "@InvalidIteM@", "@#Invalid_IteM@#", "@#ValiditeM@#"]);