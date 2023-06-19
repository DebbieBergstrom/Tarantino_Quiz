import allQuestions from './questionsarray.js';


document.addEventListener("DOMContentLoaded", () => {

  // Get boxes 
  const homeBox = document.getElementById('home-box');
  const rulesBox = document.getElementById('rules-box');
  const nameFirstBox = document.getElementById('name-first-box');
  const gameBox = document.getElementById('game-box');
  const scoreBox = document.getElementById('score-box');

  // Get main buttons
  const btnToRules = document.getElementById('btn-rules');
  const btnToQuiz = document.getElementById('btn-to-quiz');
  const btnToHighScoreList = document.getElementById('btn-highscore');
  const btnToNameFirst = document.getElementById('btn-to-name-first');
  const btnToNameFirst2 = document.getElementById('btn-to-name-first-2');
  const btnExitToHome = document.getElementById('btn-exit');
  const btnExitToHome2 = document.getElementById('btn-exit-2');
  const btnExitToHome3 = document.getElementById('btn-exit-3');

  // Initially hide all boxes except the homeBox
console.log('Before adding "hidden" class:');
console.log('gameBox:', gameBox.classList.contains('hidden'));
console.log('rulesBox:', rulesBox.classList.contains('hidden'));
console.log('nameFirstBox:', nameFirstBox.classList.contains('hidden'));
console.log('scoreBox:', scoreBox.classList.contains('hidden'));


  // Initially hide all boxes except the homeBox
  gameBox.classList.add('hidden');
  rulesBox.classList.add('hidden');
  nameFirstBox.classList.add('hidden');
  scoreBox.classList.add('hidden');

console.log('After adding "hidden" class:');
console.log('gameBox:', gameBox.classList.contains('hidden'));
console.log('rulesBox:', rulesBox.classList.contains('hidden'));
console.log('nameFirstBox:', nameFirstBox.classList.contains('hidden'));
console.log('scoreBox:', scoreBox.classList.contains('hidden'));



  // Toggles between the desired "boxes" to be shown/hidden
  function toggleBoxes(elementToShow, ...elementsToHide) {
    elementToShow.classList.remove('hidden'); // Show the element

    for (const element of elementsToHide) {
      element.classList.add('hidden'); // Hide the elements
    }
  }

  btnToNameFirst.addEventListener("click", () => toggleBoxes(nameFirstBox, homeBox, gameBox, rulesBox, scoreBox));
  btnToNameFirst2.addEventListener("click", () => toggleBoxes(nameFirstBox, homeBox, gameBox, rulesBox, scoreBox));

  btnToRules.addEventListener("click", () => toggleBoxes(rulesBox, homeBox, nameFirstBox, gameBox, scoreBox));
  btnToHighScoreList.addEventListener("click", () => toggleBoxes(scoreBox, homeBox, rulesBox, nameFirstBox, gameBox));

  btnExitToHome.addEventListener("click", () => toggleBoxes(homeBox, nameFirstBox, gameBox, rulesBox, scoreBox));
  btnExitToHome2.addEventListener("click", () => toggleBoxes(homeBox, nameFirstBox, gameBox, rulesBox, scoreBox));
  btnExitToHome3.addEventListener("click", () => toggleBoxes(homeBox, nameFirstBox, gameBox, rulesBox, scoreBox));

  btnToQuiz.addEventListener("click", () => {
    toggleBoxes(gameBox, homeBox, rulesBox, nameFirstBox, scoreBox);
    beginQuiz();
  });


  const quizQuestions = document.getElementById('questions');
  const btnNext = document.getElementById('btn-next');
  const btnAnswers = document.getElementById('answer-btns');
  const movieImg = document.getElementById('quiz-img');


  /**
   * ############################## NAME FIRST BOX #####################################
   */

  let username = "";
  let nameInput = document.getElementById("name-input");
  let btnSubmitName = document.getElementById('btn-submit');

  btnToQuiz.style.display = "none"; // Initially hides the button until a valid name is submitted in the unername input field.

  btnSubmitName.addEventListener("click", initialize); //Validates the input name, stores the name value, initializes the beginQuiz funtiion.

  function initialize() {
    let nameError = document.getElementById("name-error");
    let name = nameInput.value.trim();

    // Validate the name
    if (name === "") {
      nameError.textContent = "You must enter a name first.";
      return;
    }

    // Validate the name format
    if (!/^[a-zA-Z]{1,12}$/.test(name)) {
      nameError.textContent = "Name should only contain letters (maximum 12 characters).";
      return;
    }

    // Clear the error message
    nameError.textContent = "";

    // Store the username
    username = name;

    // Show the "Let the Quiz Begin!" button when a valid name is submitted
    btnToQuiz.style.display = "block";


    // STARTS THE QUIZ
    btnToQuiz.addEventListener("click", () => {
      toggleBoxes(gameBox, homeBox, rulesBox, nameFirstBox, scoreBox);
      beginQuiz();
    });
  }

  let countOfQuestion = document.getElementById("number-of-q");
  let activeQuestionIndex = 0;
  let score = 0;

  let timerElement = document.querySelector('.timer');
  let questionTime = 15; // Total time for each question in seconds

  function startTimer() {
    let currentTime = questionTime;
    timerElement.textContent = currentTime;

    timer = setInterval(() => {
      currentTime--;

      if (currentTime <= 5 && currentTime >= 0) {
        timerElement.style.color = "red";
      } else {
        timerElement.style.color = "green";
      }

      timerElement.textContent = currentTime;

      if (currentTime <= 0) {
        clearInterval(timer);
        currentTime = 0; // Set the time to 0 to avoid negative numbers
        timerElement.textContent = currentTime; // Update the displayed time to 0
      }
    }, 1000);
  }


  function beginQuiz() {
    activeQuestionIndex = 0;
    score = 0;
    startTimer(questionTime);
    btnNext.innerHTML = "Next";
    displayQuestion();
    countOfQuestion.textContent = `1 out of ${allQuestions.length}`;
  }

  function displayQuestion() {
    resetState();
    let activeQuestion = allQuestions[activeQuestionIndex];
    let questionNumber = activeQuestionIndex + 1;
    quizQuestions.innerHTML = questionNumber + ". " + activeQuestion.question;

    movieImg.innerHTML = activeQuestion.image;
    movieImg.classList.add("quiz-img");
    countOfQuestion.textContent = `${activeQuestionIndex + 1} out of ${allQuestions.length}`;

    btnAnswers.innerHTML = "";

    activeQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn-answ");
      btnAnswers.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }

  function resetState() {
    btnNext.style.display = "none";
    while (btnAnswers.firstChild) {
      btnAnswers.removeChild(btnAnswers.firstChild);
    }
  }

  function selectAnswer(e) { //targets the four fields of answer options.
    clearInterval(timer);
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct"); // this is where it colors the choice green for correct.
      score++;
    } else {
      selectedBtn.classList.add("incorrect"); // this is where it colors the choice red for incorrect.
    }
    Array.from(btnAnswers.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true; // takes away the ability re-select another answer. Put my own popup here with fun facts?
    })
    btnNext.style.display = "block";
  }

// Declare the highscores array
let highscores = [];

// Function to display the score after the quiz
function displayScore() {
  clearInterval(timer);
  resetState();
  countOfQuestion.style.display = "none";
  timerElement.style.display = "none";
  movieImg.style.display = "none";

  quizQuestions.innerHTML = `${username}, you scored ${score} out of ${allQuestions.length}!`;

  // Create the user's score object
  let userScore = {
    name: username,
    score: score
  };

  // Push the user's score object into the highscores array
  highscores.push(userScore);

  btnNext.innerHTML = "See Highscore List";
  btnNext.style.display = "block";
}

function handleBtnNext() {
  activeQuestionIndex++;
  if (activeQuestionIndex < allQuestions.length) {
    displayQuestion();
    clearInterval(timer);
  } else {
    displayScore();
    btnNext.removeEventListener("click", handleBtnNext);
    btnNext.addEventListener("click", toggleToScoreBox);
  }
}

function toggleToScoreBox() {
  updateHighscoreList();
  toggleBoxes(scoreBox, nameFirstBox, homeBox, gameBox, rulesBox);
}

// Update the highscore list
function updateHighscoreList() {
  let highscoreList = document.getElementById("highscore-list");

  // Clear the existing highscore list
  highscoreList.innerHTML = "";

  // Update the highscore list with the new data
  for (let highscore of highscores) {
    let listItem = document.createElement("li");
    let nameElement = document.createElement("p");
    nameElement.textContent = `${highscore.name} - ${highscore.score}`;
    listItem.appendChild(nameElement);
    highscoreList.appendChild(listItem);
  }
}

btnNext.addEventListener("click", handleBtnNext);

beginQuiz();

});