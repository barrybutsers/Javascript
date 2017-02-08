window.onload = function () {
    alert("Welkom");
    alert("Er wordt zometeen een getal voor u berekend.");
    alert("U krijgt 3 pogingen om dit getal te raden.");
    var getal = parseInt(Math.random() * 10 + 1);
    var poging1 = prompt("Voer het eerste getal in");
    while (isNaN(poging1)) {
        var poging1 = prompt("U heeft een number ingevoerd probeer het nogmaals");
    }
    if (poging1 == getal) {
        alert("Geraden!");
        document.getElementById('gaudio').play();
        document.getElementById('results').innerHTML = 'Gefeliciteerd u heeft gewonnen!';
        document.getElementById('amount').innerHTML = 'Met maar slechts een poging, baas';
        document.getElementById('fig').setAttribute('src','plaatjes/ggif.gif');
        return;
    }
    else if (poging1 <= getal) {
        alert("het getal ligt erboven");
    }
    else if (poging1 >= getal) {
        alert("het getal ligt eronder");
    }
    var poging2 = prompt("voer het tweede getal in");
    while (isNaN(poging2)) {
        var poging2 = prompt("U heeft een number ingevoerd probeer het nogmaals");
    }
    if (poging2 == getal) {
        alert("Geraden!");
        document.getElementById('gaudio').play();
        document.getElementById('results').innerHTML = 'Gefeliciteerd u heeft gewonnen!';
        document.getElementById('amount').innerHTML = 'Met maar slechts twee pogingen, netjes';
        document.getElementById('fig').setAttribute('src','plaatjes/ggif.gif');
        return;
    }
    else if (poging2 <= getal) {
        alert("het getal ligt erboven");
    }
    else if (poging2 >= getal) {
        alert("het getal ligt eronder");
    }
    var poging3 = prompt("voer het tweede getal in");
    while (isNaN(poging3)) {
        var poging3 = prompt("U heeft een number ingevoerd probeer het nogmaals");
    }
    if (poging3 == getal) {
        alert("Geraden!");
        document.getElementById('gaudio').play();
        document.getElementById('results').innerHTML = 'Gefeliciteerd u heeft gewonnen!';
        document.getElementById('amount').innerHTML = 'Met drie pogingen, da kan beter';
        document.getElementById('fig').setAttribute('src','plaatjes/ggif.gif');
        return;
    }
    else if (poging3 <= getal) {
        alert("het getal lag erboven");
    }
    else if (poging3 >= getal) {
        alert("het getal lag eronder");
    }
    document.getElementById('results').innerHTML = 'Helaas verloren, je kan het altijd nog een keer proberen door op de gif hieronder te klikken';
    alert("Helaas verloren het getal was " + getal);
    document.getElementById('vaudio').play();
    document.getElementById('fig').setAttribute('src','plaatjes/bgif.gif');


}