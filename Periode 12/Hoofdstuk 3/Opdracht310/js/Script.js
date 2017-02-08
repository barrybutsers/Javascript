window.onload = function () {

    // Zet al je code hieronder (binnen het window.onload event)
    var naam = prompt('wat is je naam?');
    var leeftijd = prompt('wat is je leeftijd?');
    var snack = prompt('wat is je favoriete snack?');
    var bier = prompt('wat is je favoriete bier');
    alert('dank u voor het invullen van deze informatie');
    var element = document.getElementById('storyline').innerHTML;
    var inhoud = element.innerHTML;
    document.getElementById("storyline").innerHTML = " je naam is " + naam + " je leeftijd is " + leeftijd + " je favoriete snack is " + snack + " en je favoriete bier is " + bier;
    var kat = document.getElementById('image1').innerHTML;
    imageObject.src = "http://placekitten.com/g/600/650";
}