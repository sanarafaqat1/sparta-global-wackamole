// Variables to use throughout the game
var scoreboard = document.querySelector('.score');
var hole = document.querySelectorAll('.hole');
var mole = document.querySelectorAll('.Mole');
var score_show = document.querySelector('score_show');
var btnClick = document.querySelector('.button');
var start_screen = document.querySelector('start_screen');

// Variable with Let can have a Block Scope
let score = 0;
let timesUp = false;
let lastHome;

//Minimum and Maximum time in the randomTime function
//Math round returns the number nearest to the value of a number rounded to the nearest integer
// Function that gives random amount of time between min and max
// A utility
function randomTime(min,max) {
       return Math.round (Math.random() * (max - min) + min);
}

// idx catches function
// holeRandom picks a random hole , which takes a list of hole
//getmeadomelement    
  function holeRandom(hole) {
      var numHole = Math.floor(Math.random()* hole.length);
      var hole = hole[numHole];
  }
