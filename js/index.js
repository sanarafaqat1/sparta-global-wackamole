
var holes = document.querySelectorAll('.hole');
var displayLevel= document.querySelector('.score');
var moles = document.querySelectorAll('.mole');
var btnStart = document.querySelector('button');
var startScreen = document.querySelector('.begin-screen');
var showScore = document.querySelector('.myScore');
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

var score = 0;
var lastHole;
var timesUp = false; // timesup is set to false
var time = 10;

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
  // but then we add it by using the variable displayLevel.classList
  setTimeout(() => {
    hole.classList.remove('up');
    displayLevel.classList.remove('add');
    if (!timesUp) popUp(); // i added this after creating the variable timesUp, so that if time is not up then run popUp again

  }, time);
}


function start() { //this function starts the game
  score = 0; // this restarts the score board from 0, so when playing again you don't get confused
  displayLevel.textContent = score;
  timesUp = false; // this is so that when ur running the game again if restarts with false
  displayLevel.classList.remove('add');
  startScreen.classList.add('hide');

  setInterval(function(){
    if(time > 0){
      time--;
      console.log(time);
      document.getElementById('timer').innerHTML = time;
    }
  }, 1000);

  // start popUp
  popUp(); // this will then run the game

  //true variable stops the mice from coming up, which then stops the game
  // This function is stating that when the game goes to 15 seconds the timesUp is = true
  setTimeout(() => {
    timesUp = true; //this is changed to true when
    startScreen.classList.remove('hide');

    if (score > 0) {
      showScore.classList.add('show');
      var message = 'Your score is: ' + score + (score >= 10  ? " GREAT!" : '');
      showScore.textContent = message;
    }

  }, 10000);// The game last for 15 seconds, and this is shown in miliseconds
}
// console.log(setTimeout);
function hit(e) { // e is for the event that hit function
  if (!timesUp) {
    displayLevel.classList.add('add');
    score++;
    displayLevel.textContent = score;
  }
}
moles.forEach(mole => {   //this listens to each of the mole in the html
  mole.addEventListener('click', hit);
});

btnStart.addEventListener('click', start);
