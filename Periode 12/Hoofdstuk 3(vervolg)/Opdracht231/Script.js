var clicks = 0;
var score = [0, 0, 0];

function stil()
{
    document.getElementById('button2').style.display = 'none';
    score.push(clicks);
    score.sort();
    score.reverse();
    document.getElementById('score1').innerHTML = score[0];
    document.getElementById('score2').innerHTML = score[1];
    document.getElementById('score3').innerHTML = score[2];
}

function start()
{
    document.getElementById('button2').style.display = 'block';
    setTimeout(function () {
        stil();
    }, 5000);
    clicks = 0;
}

function klik()
{
    document.getElementById('score').innerHTML = "Je zit op de  " + clicks + "!";
    clicks++;
}
console.log("Lars van Alphen IO1D4");