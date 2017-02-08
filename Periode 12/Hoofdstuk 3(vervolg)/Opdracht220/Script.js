// hier wordt de functie groet aangemaakt die de innerHTMl veranderd
function baNaan(groet){
    document.getElementById("header1").innerHTML = groet;
}

window.onload = function(){
    //hier wordt de varaible die gebruikt gaat worden in de function gedeclareed.
    var groet = "Gegroet " + prompt("wat is u naam?");
    //de functie wordt uitgevoerd
    baNaan(groet);
    console.log("lars van Alphen IO1D4")
}