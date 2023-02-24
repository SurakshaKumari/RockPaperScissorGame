var paper = 'paper.png';
var rock ='rock.png';
var scissor='scissor.png';
var choice;
 function func(){
    choice = 1;
    document.getElementById('human').src = paper;
    computer();
    
 }
 
 function func1(){choice = 2;
    document.getElementById('human').src = rock;
    computer();
    
 }
 
 function func2(){
      choice = 3 ;
    document.getElementById('human').src = scissor;
    computer();
 
 }

// get random number
function computer(){
var rnd =  Math.random();
console.log(rnd);
if(rnd <= 0.333){
    document.getElementById('comp').src = paper;
    if(choice == 1){document.getElementById('result').innerHTML="Tie";}
    else{document.getElementById('result').innerHTML="Won";}
}
else if(rnd <= 0.67 ){
    document.getElementById('comp').src = rock;
    if(choice == 1){document.getElementById('result').innerHTML="Won";}
    else if(choice == 2){document.getElementById('result').innerHTML="Tie";}
    else{document.getElementById('result').innerHTML="Lost";}
}
else{
    document.getElementById('comp').src = scissor;
    if(choice == 1){document.getElementById('result').innerHTML="Won";}
    else if(choice == 2){document.getElementById('result').innerHTML="Lost";}
    else{document.getElementById('result').innerHTML="Tie";}
}
}
