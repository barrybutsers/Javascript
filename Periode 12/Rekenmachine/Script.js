var cijfer1 = prompt('cijfer 1');
var som = prompt('+ - x :');
var cijfer2 = prompt('cijfer 2');
if(som === '+'){
    var uitkomst = cijfer1 + cijfer2;
}
else if(som === '-'){
    var uiktomst = cijfer1 - cijfer2;
}
else if(som === 'x'){
    var uitkomst = cijfer1 * cijfer2;
}
else if(som === '/'){
    var uitkomst = cijfer1 / cijfer2;
}
else{
    alert('Er is iets misgegaan excuses voor het ongemak');
}
alert(parseInt(uitkomst));