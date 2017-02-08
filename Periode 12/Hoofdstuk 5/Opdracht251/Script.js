$(document).ready(function () {
    // Fade in van H1 element op de pagina
    $(".welcome").fadeIn();

    // slide toggle van header 2 
    $("#subTitle").slideToggle(4000);

    // slide van paragraaf 1
    $(".paragraph1").slideToggle();
    //slide toggle van alle img elementen
    $("#img1").slideToggle(1000);
    $("#img2").slideToggle(2000);
    $("#img3").slideToggle(3000);
    $("#img4").slideToggle(4000);
});
//fade in van wanneer je op de button klikt 
function klik(){
    $("h3").fadeIn();
    $("ol").fadeIn();
}
console.log("Lars van ALphen IO1D4");