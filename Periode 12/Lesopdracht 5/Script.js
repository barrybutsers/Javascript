// maakt de functie aan.
function getUserInput() {
    // vraagt de gebruiker om een getal in te voeren en rondt het af.
    var getal = parseInt(prompt("Geef een getal op"));
    // checkt of het getal ook werkelijk een getal is
    if (isNaN(getal)) {
        return 0;
    }
    // als het getal een nummer is wordt het opgeslagen
    else {
        return getal;
    }
}
// hieronder wordt de functie 5 keer uitgevoerd.
    var getal1 = getUserInput();
    alert("Getal 1 is: " + getal1);
    var getal2 = getUserInput();
    alert("Getal 2 is: " + getal2);
    var getal3 = getUserInput();
    alert("Getal 3 is: " + getal3);
    var getal4 = getUserInput();
    alert("Getal 4 is: " + getal4);
    var getal5 = getUserInput();
    alert("Getal 5 is: " + getal5);

