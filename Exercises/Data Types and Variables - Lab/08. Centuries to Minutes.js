function centuriesToMinutes(century) {
    let years = century * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = 24 * days;
    let minutes = hours * 60;
    console.log(`${century} centuries = ${years} `+`years = ${days} `+`days = ${hours} `+`hours = ${minutes} minutes `);
}
centuriesToMinutes (1);