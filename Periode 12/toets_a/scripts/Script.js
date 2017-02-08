/**
    Javascript toets Versie A

    Hieronder kun je per opdracht je antwoorden maken!
**/


// Opdracht 2: Typ je antwoord hieronder
var programmingLanguages = ["PHP", "Javascript", "ASP", "C++"];
var teller = 0;
while(teller < programmingLanguages.length){
    console.log(programmingLanguages[teller]);
    teller++;
}
// Opdracht 3: Typ je antwoord hieronder
var nameList = ["Bram", "Ron", "Martijn"];
function nameAdd(y){
    y.push("Mike","Jory");
}
nameAdd(nameList);
console.log(nameList);
// Opdracht 4: Typ je antwoord hieronder
$(document).ready(function () {
    $("h1").css("background-color", "red");

    // Opdracht 5: Typ je antwoord hieronder
    $("button").click(function () {
        $("p").fadeOut();
    });
    // Opdracht 6: Typ je antwoord hieronder
    $("img").hover(function () {
        $("img").attr("src", "images/afbeelding2.jpg");

    });
    $("img").mouseOut(function () {
        $("img").attr("src", "images/afbeelding1.jpg");
    });
    // Opdracht 7: Typ je antwoord hieronder
    $("p").dblclick(function () {
        $("body").addClass("black");
    });
    // Opdracht 8: Typ je antwoord hieronder
});