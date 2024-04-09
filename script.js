function zegarek() {
    let czas = new Date();

    let dzien = czas.getDate();
    let miesiac = czas.getMonth() + 1;
    let rok = czas.getFullYear();

    let godz = czas.getHours();
    if (godz < 10) godz = "0" + godz;
    let min = czas.getMinutes();
    if (min < 10) min = "0" + min;
    let sek = czas.getSeconds();
    if (sek < 10) sek = "0" + sek;

    document.getElementById("timer").innerText =
        dzien + "/" + miesiac + "/" + rok + " | " + godz + ":" + min + ":" + sek;

    setTimeout("zegarek()", 1000);
}
