//hier wordt het willekeurige getal beraden.
var getal = parseInt(Math.random() * 10 + 1);
//hier wordt het aantaal pogingen gedeclareerd.
var tries = 1;
//hier kan je je eerste poging wagen.
var poging = prompt("Doe een poging");
//deze loop blijft lopen totdat het getal geraden wordt
while(poging != getal){
    tries++;
    if(poging < getal){
        var poging = prompt("het getal ligt erboven");
    }
    else if(poging > getal){
        var poging = prompt("Het getal ligt eronder");
    }
}
//hier wordt u gefeliciteerd zodra je het getal geraden hebt.
alert("gefeliciteerd u heeft het getal geraden in " + tries + " pogingen");
console.log("Lars van Alphen IO1D4")