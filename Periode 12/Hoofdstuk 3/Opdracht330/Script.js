var a=20, b= 9, c=1, d=null;

var dag1 = 'maandag';
var dag2 = 'dinsdag';
var dag3 = 'Dinsdag';

var score = 100;
if((score === 100) === true){
    alert('true');
}
else{
    alert('false');
}
if((score !== 100) === true){
    alert('true');
}
else{
    alert('false');
}
if((score < 20 || score >50) === true){
    alert('true');
}
else{
    alert('false');
}
if((score > 0 && score > 99) === true){
    alert('true');
}
else{
    alert('false');
}
if((score < 30 || score > 100 || 1==1) === true){
    alert('true');
}
else{
    alert('false');
}
if((a === 20 && b<8 && c<3) === true){
    alert('true');
}
else{
    alert('false');
}
if((a === 20 && b<8 && c<3) === true){
    alert('true');
}
else{
    alert('false');
}
if((a === 20 && b>8 || c<3) === true){
    alert('true');
}
else{
    alert('false');
}
if((a == d) === true){
    alert('true');
}
else{
    alert('false');
}
if((dag1 != dag2) === true){
    alert('true');
}
else{
    alert('false');
}
if((dag3 == dag2) === true){
    alert('true');
}
else{
    alert('false');
}