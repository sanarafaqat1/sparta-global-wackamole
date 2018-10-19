
   //Variables to use throughout the game
   var scoreboard = document.querySelector('.score');
   var holes = document.querySelectorAll('.Hole');
   var mole = document.querySelectorAll('.Mole');
   var score_show = document.querySelector('score_show');
   var btnClick = document.querySelector('.button');
   var start_screen = document.querySelector('start_screen');


   // Variable with Let can have a Block Scope
   var score = 0;
   var timesUp = false;
   var lastHole;
   var pop;
   var choice;

//Minimum and Maximum time in the randomTime function
//Math round returns the number nearest to the value of a number rounded to the nearest integer
// Function that gives random amount of time between min and max
// A utility
function randomTime(min,max) {
       return Math.round(Math.random() * (max - min) + min);
}

// holeRandom picks a random hole , which takes a list of hole
//getmeadomelement
// This function brings up random holes which are a div on the HTML page
function randomHole(holes) {
       var numbHole = Math.floor(Math.random() * holes.length);
       var hole = holes[numbHole];
       if (hole === lastHole) {
         console.log('Same One');
         return randomHole(holes)
       }
//this is making sure the last hole that came up does not come up again, as it's 1-6 propability that it will
       lastHole = hole;
       return hole;
   }

  //Funcation popUp to bring up the Moles

  function popUp() {
    var time = randomTime(200, 2000);
    var hole = randomHole(holes);
    hole.classList.add('up');
       // console.log(time, hole);
    }
