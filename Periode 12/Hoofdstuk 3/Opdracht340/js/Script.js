window.onload = function () {

    // Tip: Pak de presentaties van week 6 en 7 erbij voor voorbeelden. Ook kun je meer lezen over de onderwerpen in de opdrachtenportaal direct onder de opdracht

    // Opdracht 1: Vraag 2x een getal aan de gebruiker (prompt)
    var g1 = prompt("voer het 1e getal in");
    var g2 = prompt("voer het 2e getal in");
    // Opdracht 2: Vorm deze getallen om tot een Number middels parseInt(). Zie de presentaties van Week 7 les 1 voor voorbeeldcode
    var g1 = parseInt(g1);
    var g2 = parseInt(g2);
    // Opdracht 3: Check of deze getallen geen Nan (Not An Number, check dit via isNan() ) zijn. Als dit wel zo is, geef een foutmelding aan de gebruiker. Zie presentaties
    if (isNaN(g1)) {
        alert("Getal 1 is geen nummer!");
    }
    if (isNaN(g2)) {
        alert("Getal 2 is geen nummer!");
    }
    // Opdracht 4: Toon de 2 ingevoerde getallen in de HTML elementen met id "getal1" en "getal2". Tip: Gebruik document.getElementById & .innerHTML
    document.getElementById("getal1").innerHTML = g1;
    document.getElementById("getal2").innerHTML = g2;
    // Opdracht 5: Vermenigvuldig de 2 getallen en toon de uitkomst in het HTML element met id "uitkomst"
    var resultaat = g1 * g 2;
    document.getElementById("uitkomst").innerHTML = resultaat;
    // Opdracht 6: alert de uitkomst als volgt: "De uitkomst van jouw som is ...". Vervang de puntjes natuurlijk door de uitkomst van de som
    alert("de uiktomst van jou som is " + resultaat);
    // Opdracht 7: Stuur je naam en de datum naar de console
    console.log("Lars van Alphen IO1D4");


}