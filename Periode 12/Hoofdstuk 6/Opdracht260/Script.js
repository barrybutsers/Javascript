$(document).ready(function () {
    $("button").click(function () {
        // verandert titel 1 
        $("#titel1").text("Opleiding applicatieontwikkelaar");
        // verandert titel 2
        $("#titel2").text("Waar kan ik werken?");
        //plaatste een extra lap text na de eerste alinea
        $("#alinea1").append("<p>Ook de overheid is vaak een goede werkgever. Secundaire arbeidsvoorwaarden zijn meestal goed.</p>");
        //vervangt titel 3
        $("#titel3").replaceWith("<h3>Hoe ziet de opleiding eruit?</h3>");
        //plaatste een lap text voor de alinea
        $(".content1").prepend("<p>De overstap die je maakt van vmbo-T of Have is redelijk groot. Er wordt van je verwacht dat je zelfstandig te werk gaat en gaat het er minder schools aan toe dan je gewend was.</p>");
        //geeft de h2 elementen de kleur rood
        $("h2").css("color", "red");
        //maakt de onderste alinea zwart op wit
        $("#kerntaken").addClass("zwartopwit");
        //geeft de achgtergrond de kleur zwart
        $("html").css("background-image", "none");
        $("#wrapper").css("background-image", "none");
        $("html").css("background-color", "black");

        //dit geeft de text een groene kleur
        $("p").css("color", "green");
    });
});
console.log("Lars van Alphen IO1D4");