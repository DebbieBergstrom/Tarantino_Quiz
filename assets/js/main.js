document.addEventListener("DOMContentLoaded", () => {

// Get boxes 
const homeBox = document.querySelector('.home-box'); 
const rulesBox = document.querySelector('.rules-box'); 
const nameFirstBox = document.querySelector('.name-first-box');
const gameBox = document.querySelector('.game-box');
const finishedBox = document.querySelector('.finished-box');
const scoreBox = document.querySelector('.score-box');

// Get buttons
const btnRules = document.querySelector('.btn-rules');
const btnToQuiz = document.querySelector('.btn-to-quiz');
const btnScore = document.querySelector('.btn-highscore');
const btnNameFirst = document.querySelector('.btn-to-name-first');
const btnExit = document.querySelector('.btn-exit');
let btnSubmit = document.querySelector('#btn-submit');

// Get Finished Quiz background & Scorelist
let finishedImage = document.querySelector('.finished-quiz-img-bg');
let scoreList = document.querySelector('.score-list');

function toggleBoxes(ToShow, ...ToHide) {
    ToShow.classList.remove("hidden"); // This shows the first element
  
    for (const element of ToHide) {
      element.classList.add("hidden"); // This hides the rest of the elements
    }
  }

  btnRules.addEventListener("click", () => toggleBoxes(rulesBox, homeBox, nameFirstBox, gameBox, finishedBox, scoreBox));
  btnScore.addEventListener("click", () => toggleBoxes(scoreBox, homeBox, rulesBox, nameFirstBox, gameBox, finishedBox));
  
  btnNameFirst.addEventListener("click", () => toggleBoxes(nameFirstBox, homeBox, rulesBox, gameBox, finishedBox, scoreBox));
  btnToQuiz.addEventListener("click", () => toggleBoxes(gameBox, homeBox, rulesBox, nameFirstBox, finishedBox, scoreBox));
  btnExit.addEventListener("click", () => toggleBoxes(homeBox, rulesBox, nameFirstBox, gameBox, finishedBox, scoreBox));

  

});