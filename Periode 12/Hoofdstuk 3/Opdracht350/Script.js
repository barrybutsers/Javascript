window.onload = function () {
    var zoekwoord1 = 'KW1C';
    var zoekwoord2 = 'IO1D4';
    var zoekwoord3 = 'applicatie/media ontwikkelaar';
    var zin = prompt('Voer een zin in');
    if (zin.indexOf(zoekwoord1) != -1) {
        alert(zoekwoord1 + " is gevonden");
    }
    else {
        alert(zoekwoord1 + ' is niet gevonden in de zin');
    }
    if (zin.indexOf(zoekwoord2) != -1) {
        alert(zoekwoord2 + " is gevonden");
    }
    else {
        alert(zoekwoord2 + ' is niet gevonden in de zin');
    }
    if (zin.indexOf(zoekwoord3) != -1) {
        alert(zoekwoord3 + " is gevonden");
    }
    else {
        alert(zoekwoord3 + ' is niet gevonden in de zin');
    }
    if (zin.lastIndexOf(zoekwoord1) != -1) {
        alert(zoekwoord1 + " is gevonden");
    }
    else {
        alert(zoekwoord1 + ' is niet gevonden in de zin');
    }
    if (zin.lastIndexOf(zoekwoord2) != -1) {
        alert(zoekwoord2 + " is gevonden");
    }
    else {
        alert(zoekwoord2 + ' is niet gevonden in de zin');
    }
    if (zin.lastIndexOf(zoekwoord3) != -1) {
        alert(zoekwoord3 + " is gevonden");
    }
    else {
        alert(zoekwoord3 + ' is niet gevonden in de zin');
    }
    alert(zin.substr(0, 10));
    alert(zin.toUpperCase(zin));
    alert(zin.toLowerCase(zin));
    alert(zin.replace("KW1C", "Koning Willem 1 College"));
    alert(zin.replace("IO1D4", "JavaScript"));
    alert(zin.replace("applicatie/media ontwikkelaar", "harambe"));
    document.getElementById("zin").innerHTML = zin;




    console.log("Lars van Alphen IO1D4");
} 