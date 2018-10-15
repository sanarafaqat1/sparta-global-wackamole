// Variables to use throughout the game
var scoreboard = document.querySelector(.score);
var hole = document.querySelectorAll(.hole);
var mole = document.querySelectorAll(.Mole);
var score_show = document.querySelector(.score_show);
var btnClick = document.querySelector(.button);
var start_screen = document.querySelector(.start_screen);

// Variable with Let can have a Block Scope
let score = 0;
let timesUp = false;
let lastHome;

//Minimum and Maximum time in the randomTime function
//Math round returns the number nearest to the value of a number rounded to the nearest integer
function randomTime(min,max) {
         return Math.round(Math.random() * (max - min) + min);
}

// idx catches function
  function holeRandom(hole) {

  }
