var paper = 'paper.png';
var rock ='rock.png';
var scissor='scissor.png';
var marks = 0;
var choice;
var score =  document.getElementById('settxt');
 function func(){
    choice = 1;
    document.getElementById('human').src = paper;
    computer();
    document.getElementById('mark').innerHTML = marks;
 }
 
 function func1(){choice = 2;
    document.getElementById('human').src = rock;
    computer();
    document.getElementById('mark').innerHTML = marks;
 }
 
 function func2(){
      choice = 3 ;
    document.getElementById('human').src = scissor;
    computer();
    document.getElementById('mark').innerHTML = marks;
 }

// get random number
function computer(){
var rnd =  Math.random();
console.log(rnd);
if(rnd <= 0.333){
    document.getElementById('comp').src = paper;
   if(choice == 1){ marks = marks + 0; score.innerText="Tie";}
   else if(choice == 2){ score.innerText="You Lost";}
   else{marks = marks + 1; score.innerText="You Win";}
}
else if(rnd <= 0.67 ){
    document.getElementById('comp').src = rock;
    if(choice == 1){ marks = marks + 1; score.innerText="You Win";}
    else if(choice == 2){marks = marks + 0; score.innerText="Tie";}
    else{ score.innerText="You lost";}
}
else{
    document.getElementById('comp').src = scissor;
    if(choice == 1){  score.innerText="You Lost";}
   else if(choice == 2){marks = marks + 1; score.innerText="You Win";}
   else{marks = marks + 1; score.innerText="Tie";}
}

}

