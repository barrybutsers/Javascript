window.onload = function () {

    /* 
    We gebruiken het window.onload even om ervoor te zorgen
    dat de code pas uitgevoerd wordt, zodra de DOM volledig geladen is door de browser.

    Typ je code direct onder de regels commentaar
		
    Tip: Bekijk het voorbeeld op W3Schools
    http://www.w3schools.com/jsref/met_document_getelementbyid.asp
    */


    // Opdracht 1: alert() de inhoud (.innerHTML) van het element met ID "greeting"
    alert(document.getElementById("greeting").innerHTML);

    // Opdracht 2: alert() de inhoud (.innerHTML) van het element met ID "introduction"
    alert(document.getElementById("introduction").innerHTML);

    // Opdracht 3: console.log() de alt tekst (.alt) van de afbeeling met ID "image1"
    console.log(document.getElementById("image1").innerHTML);

    // Opdracht 4: verander de inhoud (.innerHTML = "Jouw tekst hier") van het element met het ID "greeting" naar een door jou zelf verzonnen begroeting
    document.getElementById("greeting").innerHTML = "awagoon";

    // Extra opdracht: Probeer de tekst van het element met ID "introduction" te tonen door de .style.display van het element naar "block" te veranderen!
    document.getElementById("introduction").style.display = "block";


}