var variable1 = prompt('een getal graag');
alert(parseInt(variable1));
alert(parseFloat(variable1));
if(isNaN(variable1)){
    alert("Je ingevoerde getal is ongeldig");
}
else{
    alert("je ingevoerde getal is geldig");
}