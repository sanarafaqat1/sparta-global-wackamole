
var holes = document.querySelectorAll('.hole');
var scoreBoard = document.querySelector('.score');
var moles = document.querySelectorAll('.mole');
var btnStart = document.querySelector('button');
var bonkSound = document.querySelector('audio');
var startScreen = document.querySelector('.start-screen');
var showScore = document.querySelector('.myScore');

var score = 0;
var lastHole;
var timesUp = false; // timesup is set to false

// this function gives us a random amount of time between the min and the max
//Min is mili seconds and seconds, Math.round, rounds the number to the nearest integer
function randomTime(min, max) {   //randomTime takes a minimum and max, which will then return Math.round
  return Math.round(Math.random() * (max - min) + min); // This returns a clear number of miliseconds
}
// this function pics a random hole, where the mouse will pop up from
// this takes in a list of holes
//randomHole(holes) is really a getmeadomelement
// holes is a node list which stores all the wholes on the HTML page
function randomHole(holes) {
  var ranHole = Math.floor(Math.random() * holes.length);
  var hole = holes[ranHole]; //this array holds all the 6 different whole elements from 0-5

  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole; // this variable saves the reference as to what whole poped up last so it doesnt repeat it self
  // this shouldn't return the same hole again
  return hole;
}

function popUp() { //popUp function pops the mouse image up
  var time = randomTime(800, 1000); //800 = miliseconds 1000 = seconds (miliseconds, seconds)
  var hole = randomHole(holes);
     console.log('popUp');
  hole.classList.add('up'); //adding the class up which triggers the css to be top 0 , hole.up


  //because now the image doesnt disappear we now need to remove the class of 'up'
  //setTimeout is after how many seconds time, when that happens we take the hole and remove the class of 'up'
  // but then we add it by using the variable scoreBoard.classList
  setTimeout(() => {
    hole.classList.remove('up');
    scoreBoard.classList.remove('add');
    if (!timesUp) popUp(); // i added this after creating the variable timesUp, so that if time is not up then run popUp again
  }, time);
}


function start() { //this function starts the game
  score = 0; // this restarts the score board from 0, so when playing again you don't get confused
  scoreBoard.textContent = score;
  timesUp = false; // this is so that when ur running the game again if restarts with false
  scoreBoard.classList.remove('add');
  startScreen.classList.add('hide');

  // start popUp
  popUp(); // this will then run the game

  setTimeout(() => {
    timesUp = true;
    startScreen.classList.remove('hide');

    if (score > 0) {
      showScore.classList.add('show');
      var message = 'Your score: ' + score + (score >= 10 ? " GREAT!" : '');
      showScore.textContent = message;
    }

  }, 20500);
}

function bonk(e) {
  bonkSound.currentTime = 0;
  if (!timesUp) {
    bonkSound.play();
    scoreBoard.classList.add('add');
    score++;
    scoreBoard.textContent = score;
  }
}

moles.forEach(mole => {
  mole.addEventListener('click', bonk);
});

btnStart.addEventListener('click', start);
