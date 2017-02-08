$(document).ready(function () {
    $("#rood").click(function () {
        $("#wrapper").append('<div class="block red"></div>');
    })
    $("#zwart").click(function () {
        $("#wrapper").append('<div class="block black"></div>');
    })
    $("#verwijder").click(function () {
        $(".block").remove();
    })
    
});  