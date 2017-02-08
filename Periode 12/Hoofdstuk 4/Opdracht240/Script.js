$(document).ready(function () {
    // Fade in van alle H1 elementen op de pagina
    $("h1").fadeIn();

    // Fade in van alle H2 elementen op de pagina
    $("h2").fadeIn(5000);

    // Fade in van alle P elementen op de pagina (2 seconden vertraging)
    $("p").fadeIn(2000);

    // Daarna fade out van alle P elementen op de pagina(ook 2 seconden vertraging)
    $("p").fadeOut(2000);  
});
function triggerEffect(){
        // Voer slideToggle uit op alle img elementen op de pagina
        $("img").slideToggle();
    };
    console.log("Lars van Alphen IO1D4");
    