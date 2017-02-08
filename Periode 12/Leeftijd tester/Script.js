window.onload = function () {
    var geboortejaar = prompt("Wat is u geboortejaar?");
    if (isNaN(geboortejaar)) {
        alert("Voer een geldig getal in");
    }
    else {
        var leeftijd = 2016 - geboortejaar;
        if (leeftijd >= 18) {
            alert("je kan booze drinken!");
            var pils = prompt("wat is je favoriete pils?");
            if (pils === "grolsch"|"hertog jan"|"schultenbrau"|"finkbrau"|"brandt") {
                alert("Netjes");
            }
            else if(pils === "heiniken")
            {
                alert("ah oke");
            }

        }
        else if (leeftijd < 18) 
        {
            window.location = 'https://www.nix18.nl';
        }
    }
}