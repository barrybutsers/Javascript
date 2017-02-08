/**
    Opdrachtomschrijving:
    Zorg ervoor dat bij het versturen van het formulier (submit event), de onderstaande opdrachten gebeuren:
    Vergeet niet ervoor te zorgen dat het formulier NIET verstuurd word.
    
    Opdracht 1:
    Check of de Naam meer dan 7 karakaters bevat. 
    Is dit niet het geval, geef de input de class "error".
    
    Opdracht 2:
    Check of het aantal personen is ingevuld (selectedIndex hoger dan 0).
    Is dit niet het geval, geef de input de class "error".
    
    Opdracht 3:
    Als de checkbox "Diner?" is aangevinkt, dienen de verborgen <label> en <input> "dinnerAmount" zichtbaar te worden.
    Zodra deze niet is aangevinkt, dienen deze weer onzichtbaar te worden.
    
    Opdracht 4:
    Geef in het overzichtje alle informatie die de gebruiker heeft ingevuld weer. Hiervoor zijn alvast <span> elementen aangemaakt.
    Je dient alle <span> elementen gevuld te hebben!
    
    
    Extra opdracht:
    Check of de datum in de toekomst ligt!
    Is dit niet het geval, geef de input de class "error". 
    
    Tip: Lees ook goed de beoordelingscriteria!
    
**/
$(document).ready(function () {
    $("#registratieFormulier").submit(function () {
        var name = $("#name").prop("value");
        if (name.length > 7) {
            $("#name").addClass("error");
        }
        var select = $("#select").prop("selectedIndex");
        if (select < 1) {
            $("#select").addClass("error");
        }
        var diner = $("#diner").prop("checked");
        if (diner == true) {
            $(".hide").removeClass("hide");
        }
        return false;
    });
    console.log("Lars van Alphen IO1D4");
});