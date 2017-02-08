window.onload = function(){
var KW1C = {
    Naam: "Koning Willem 1 College",
    Student: "Asef Mahmoudi",
    afdeling: "ICT Academy",
    Vestigingen: "7",
    Werknemers: "1171",
    Vestigingen2: "7",
    Leerlingen: "11930",
    VSV: "311",
    omzet: "88.457.940",
    uitgaven: "88.098.573"
    };
function drawStatistics(schoolStatistics){
    document.getElementById("1").innerHTML = schoolStatistics.Naam;
    document.getElementById("2").innerHTML = schoolStatistics.Student;
    document.getElementById("3").innerHTML = schoolStatistics.afdeling;
    document.getElementById("4").innerHTML = schoolStatistics.Vestigingen;
    document.getElementById("5").innerHTML = schoolStatistics.Werknemers;
    document.getElementById("6").innerHTML = schoolStatistics.Vestigingen2;
    document.getElementById("7").innerHTML = schoolStatistics.Leerlingen;
    document.getElementById("8").innerHTML = schoolStatistics.VSV;
    document.getElementById("9").innerHTML = schoolStatistics.omzet;
    document.getElementById("10").innerHTML = schoolStatistics.uitgaven;
}

drawStatistics(KW1C);

console.log("Lars van Alphen IO1D4");
}