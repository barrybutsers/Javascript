var tijd = 1000
$(document).ready(function () {
    //Laat het lesrooster infaden
    $("#lesrooster").fadeIn(tijd);
    //code die wordt uitgevoerd zodra er op maandag wordt geklikt
    $("#maandag").click(function () {
        //de knoppen in en uit laten faden
        $("#maandag").fadeOut(tijd);
        $("#dinsdag").fadeIn(tijd);
        //2e kolom
        $("#1uur").html("Hardware AO");
        $("#2uur").html("Hardware AO");
        $("#3uur").html("PHP");
        $("#4uur").html("PHP");
        $("#5uur").html("Engels");
        $("#6uur").html("HTML/CSS");
        //3e kolom
        $("#1lokaal").html("ok1070");
        $("#2lokaal").html("ok1085");
        $("#3lokaal").html("ok1245");
        $("#4lokaal").html("ok1245");
        $("#5lokaal").html("ok1060");
        $("#6lokaal").html("ok1245");
        //4e kolom
        $("#1docent").html("H. Linsen");
        $("#2docent").html("H. Linsen");
        $("#3docent").html("R. Spierings");
        $("#4docent").html("R. Spierings");
        $("#5docent").html("J. Giesen");
        $("#6docent").html("R. Gijsbrechts");
    });
    //code die wordt uitgevoerd zodra er op dinsdag wordt geklikt
    $("#dinsdag").click(function () {
        //de knoppen in en uit laten faden
        $("#dinsdag").fadeOut(tijd);
        $("#maandag").fadeIn(tijd);
        //2e kolom
        $("#1uur").html("Keuzedeel Duits");
        $("#2uur").html("Keuzedeel Duits");
        $("#3uur").html("Digitale vaardigheden");
        $("#4uur").html("Javascript");
        $("#5uur").html("HTML/CSS");
        $("#6uur").html("HTML/CSS");
        $("#7uur").html("Rekenen");
        //3e kolom
        $("#1lokaal").html("ok1030");
        $("#2lokaal").html("ok1030");
        $("#3lokaal").html("ok1145");
        $("#4lokaal").html("ok1060");
        $("#5lokaal").html("ok1245");
        $("#6lokaal").html("ok1245");
        $("#7lokaal").html("ok1249");
        //4e kolom
        $("#1docent").html("L. Ligtenberg-Libois");
        $("#2docent").html("L. Ligtenberg-Libois");
        $("#3docent").html("P. Stegeman");
        $("#4docent").html("J. van Meer");
        $("#5docent").html("R. Gijsbrechts");
        $("#6docent").html("R. Gijsbrechts");
        $("#7docent").html("J. Beijer");
    });
});
console.log('Lars van Alphen');
