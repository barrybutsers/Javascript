window.onload = function () {
    console.log("Lars van Alphen IO1D4");
    var lijst = [prompt("het eerste dat u wilt kopen")];
    lijst.push(prompt("Het tweede dat u wilt kopen."));
    lijst.push(prompt("Het derde dat u wilt kopen."));
    lijst.push(prompt("Het vierde dat u wilt kopen."));
    lijst.push(prompt("Het vijfde dat u wilt kopen."));


    document.getElementById("l0").innerHTML = lijst[0];
    document.getElementById("l1").innerHTML = lijst[1];
    document.getElementById("l2").innerHTML = lijst[2];
    document.getElementById("l3").innerHTML = lijst[3];
    document.getElementById("l4").innerHTML = lijst[4];
}