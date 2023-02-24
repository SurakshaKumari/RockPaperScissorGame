var paper = 'paper.png';
var rock ='rock.png';
var scissor='scissor.png';
 function func(){
    document.getElementById('human').src = paper;

    computer();
 }
 
 function func1(){
    document.getElementById('human').src = rock;
    computer();
 }
 
 function func2(){
    document.getElementById('human').src = scissor;
    computer();
 }

// get random number
function computer(){
var rnd =  Math.random();
console.log(rnd);
if(rnd <= 0.333){
    document.getElementById('comp').src = paper;
}
else if(rnd <= 0.67 ){
    document.getElementById('comp').src = rock;
}
else{
    document.getElementById('comp').src = scissor;
}
}