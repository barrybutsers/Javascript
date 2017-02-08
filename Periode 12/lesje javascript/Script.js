window.onload = function () {
    var head = document.getElementById("header1").innerHTML;
    var kleur = prompt("Welke kleur?");
    console.log(head);

    document.getElementById("header1").innerHTML = "Deze site heet u welkom";
    document.getElementById("header1").style.color = kleur;
    var jantje = document.getElementById("header1").style.color;
    if (jantje == "") {
        alert('Dit klopt niet');
    }
}