/**
    Opdracht 1:
    Controleer of naam 3 of meer karakters bevat
    
    Opdracht 2:
    Controleer of leeftijd een geldig getal is

    Opdracht 3:
    Controleer of onderwerp langer dan 10 karakaters is, maar niet meer dan 60 karakaters lang
    
    Opdracht 4:
    Controleer of school is ingevuld (niet het eerste waarde)
    
    Opdracht 5: 
    Check of nieuwsbrief aangevinked is... Zo niet, toon een melding dat hij dit MOET doen...!
**/
$(document).ready(function () {
    $("#formie").submit(function () {
        // Opdracht 1:
        var name = $(".firstname").prop("value");
        if (name.length <= 3) {
            $(".firstname").css("border", "2px red solid");
        }
        else{
            $(".firstname").css("border", "2px cyan solid");
        }
        // Opdracht 2
        var age = $(".age").prop("value");
        if(isNaN(age)){
            $(".age").css("border", "2px red solid");
        }
        else{
            $(".age").css("border", "2px cyan solid");
        }
        // Opdracht 3
        return false;
    });
});

console.log("Lars van Alphen IO1D4");