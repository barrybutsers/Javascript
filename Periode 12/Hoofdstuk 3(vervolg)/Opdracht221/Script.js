console.log("Lars van Alphen IO1D4");
function klik(){
    alert("Klikbare header.")
}
function muisOver(){
    alert("alert met een hover")
}
function muisOnder(){
    document.getElementById("header3").style.color = "cyan";
}
function opContext(){
    alert("oncontextmenu");
}
function submit() {
    alert("netjes");
}
var name = prompt("Wat is u naam?");
var color = prompt("welke kleur kiest u?");
function eventCatcher(name, color){
    document.getElementById("text").innerHTML = "Bedankt! U heeft event " + name + " uitgevoerd";
    document.body.style.backgroundColor = color;
    console.log("Event" + name + "is uitgevoerd")
}
window.onload = function(){
    alert("alle dom bestanden zijn gedownload");
}
window.onresize = function(){
    document.body.style.backgroundColor = "cyan";
}
window.onscroll = function(){
    document.body.style.backgroundColor = "purple";
}
window.onpageshow = function () {
    eventCatcher(name, color);
}
