document.addEventListener("DOMContentLoaded", () => {

  // Get container boxes 
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
  const btnNext = document.getElementById('btn-next');
  const btnAnswers = document.getElementById('answer-btns');


  // Initially hide all boxes except the homeBox
  gameBox.classList.add('hidden');
  rulesBox.classList.add('hidden');
  nameFirstBox.classList.add('hidden');
  scoreBox.classList.add('hidden');


  // Toggles between the desired boxes to be shown/hidden
  function toggleBoxes(elementToShow, ...elementsToHide) {
    elementToShow.classList.remove('hidden'); // Show the element

    for (const element of elementsToHide) {
      element.classList.add('hidden'); // Hide the elements
    }
  }

  // Button event listeners executing desires functions
  btnToNameFirst.addEventListener("click", () => toggleBoxes(nameFirstBox, homeBox, gameBox, rulesBox, scoreBox));
  btnToNameFirst2.addEventListener("click", () => toggleBoxes(nameFirstBox, homeBox, gameBox, rulesBox, scoreBox));

  btnToRules.addEventListener("click", () => toggleBoxes(rulesBox, homeBox, nameFirstBox, gameBox, scoreBox));

  // Button to enter score board after quiz, updates score board with new score
  btnToHighScoreList.addEventListener("click", () => {
    toggleBoxes(scoreBox, homeBox, rulesBox, nameFirstBox, gameBox);
    updateHighscoreList();
  });

  btnExitToHome.addEventListener("click", () => toggleBoxes(homeBox, nameFirstBox, gameBox, rulesBox, scoreBox));
  btnExitToHome2.addEventListener("click", () => toggleBoxes(homeBox, nameFirstBox, gameBox, rulesBox, scoreBox));

  //button exits scoreBox and reloads the page to reset quiz
  btnExitToHome3.addEventListener("click", () => {
    toggleBoxes(homeBox, nameFirstBox, gameBox, rulesBox, scoreBox);
    location.reload();
  });


  const quizQuestions = document.getElementById('questions');
  const movieImg = document.getElementById('quiz-img');


  let storedHighscores = [];
  localStorage.setItem("highscores", JSON.stringify(storedHighscores));
  // Retrieve highscores from local storage
  storedHighscores = JSON.parse(localStorage.getItem("highscores"));

  /**
   * ############################## NAME FIRST BOX #####################################
   */

  let username = "";
  let nameInput = document.getElementById("name-input");
  let btnSubmitName = document.getElementById('btn-submit');

  btnToQuiz.style.display = "none"; // Initially hides the button until a valid name is submitted in the unername input field.

  btnSubmitName.addEventListener("click", initialize); // Calls the below initialize funtion

  btnToQuiz.addEventListener("click", () => {
    toggleBoxes(gameBox, homeBox, rulesBox, nameFirstBox, scoreBox); // Button to start the quiz
    beginQuiz();
  });

  function initialize(event) { // Store name input, validates input by displaying "Let the Quiz Begin!" button 
    event.preventDefault();
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

    // Store the username for the Highscore List
    username = name;

    // Creates the user's score object
    let userScore = {
      name,
      score: -1,
    };

    // Push the user's score object into the highscores array
    storedHighscores.push(userScore);

    // Save the highscores array to local storage
    localStorage.setItem("highscores", JSON.stringify(storedHighscores));

    // Retrieve highscores from local storage
    storedHighscores = JSON.parse(localStorage.getItem("highscores"));

    // Shows the "Let the Quiz Begin!" button when a valid name is submitted
    btnToQuiz.style.display = "block";
  }

  /**
   * ############################## QUESTIONS ARRAY #####################################
   */
  const allQuestions = [{
      image: "<img src='assets/images/inglorious_basterds_s.jpg' alt='inglorious basterds movie picture'>", // New image to each question
      question: "How was the intense strangulation scene in the film 'Inglourious Basterds' achieved?", // Question no. 1
      answers: [{
          text: "It was created using advanced visual effects and CGI techniques.", // 3 options false, 1 option true for each question
          correct: false
        },
        {
          text: "A professional stunt double simulated the strangulation with careful choreography.",
          correct: false
        },
        {
          text: "Illusion was created of camera angles, editing, and realistic sound effects.",
          correct: false
        },
        {
          text: "Tarantino himself strangled Diane Kruger to the point of losing consciousness to get the scene right",
          correct: true
        },
      ]
    },
    {
      image: "<img src='assets/images/kill_bill_s.jpg' alt='kill bill movie picture'>",
      question: "In the film 'Kill Bill', what is a unique characteristic of the onscreen deaths of the characters?", // Question no. 2
      answers: [{
          text: "All onscreen deaths are executed by male characters, emphasizing their dominance.",
          correct: false
        },
        {
          text: "Every character that dies onscreen is killed by a female, with the exception of the anime insert.",
          correct: true
        },
        {
          text: "The deaths are depicted through various supernatural and mystical means.",
          correct: false
        },
        {
          text: "Each death is a result of intricate traps and devices set by the main protagonist, The Bride.",
          correct: false
        },
      ]
    },
    {
      image: "<img src='assets/images/pulp-fiction_s.jpg' alt='pulp fiction movie picture'>",
      question: "What can be said about the biblical passage recited by Jules in 'Pulp Fiction', played by Samuel L. Jackson, known as Ezekiel 25:17?", // Question no. 3
      answers: [{
          text: "It's a modified version of the original biblical passage, tailored specifically for the film's narrative",
          correct: false
        },
        {
          text: "It's an authentic excerpt from the Book of Ezekiel in the Bible.",
          correct: false
        },
        {
          text: "It was mostly made up by Tarantino and Jackson themselves",
          correct: true
        },
        {
          text: "It is a direct quote from a lesser-known ancient scripture, not included in the traditional Bible.",
          correct: false
        },
      ]
    },
    {
      image: "<img src='assets/images/tarantino_actors_s.jpg' alt='various actors movie picture'>",
      question: "Among the following actors, who has been seen the most in Quentin Tarantino's movies, ranked from most to least appearances?", // Question no. 4
      answers: [{
          text: "Samuel L. Jackson, Leonardo DiCaprio, Christoph Waltz",
          correct: false
        },
        {
          text: "Harvey Keitel, Leonardo DiCaprio, Steve Buscemi",
          correct: false
        },
        {
          text: "Samuel L. Jackson, Tim Roth, Michael Madsen ",
          correct: true
        },
        {
          text: "Leonardo DiCaprio, Brad Pitt, Christoph Waltz",
          correct: false
        },
      ]
    },
    {
      image: "<img src='assets/images/from_dusk_till_dawn_s.jpg' alt='from dusk till dawn movie picture'>",
      question: "What collaboration occurred between Tarantino and Robert Kurtzman that led to Tarantino writing the script to From Dusk Till Dawn?", // Question no. 5
      answers: [{
          text: "They collaborated on a special effects project for Oliver Stone when the idea came up.",
          correct: false
        },
        {
          text: "It was in exchange for Kurtzman to provide the special effects for the ear-slicing scene in Reservoir Dogs. ",
          correct: true
        },
        {
          text: "They co-directed a secret short film prior to From Dusk Till Dawn.",
          correct: false
        },
        {
          text: "While working on a snuff movie, losing a bet let to the promise of writing the script.",
          correct: false
        },
      ]
    },
    {
      image: "<img src='assets/images/jackie_brown_s.jpg' alt='inglorious basterds movie picture'>",
      question: "In Jackie Brown, Samuel L. Jackson delivers an iconic performance with his character's dialogue. What notable word does he frequently use in the film?", // Question no. 6
      answers: [{
          text: "motherfu**er",
          correct: true
        },
        {
          text: "Damn",
          correct: false
        },
        {
          text: "Badass",
          correct: false
        },
        {
          text: "Cool",
          correct: false
        },
      ]
    },
    {
      image: "<img src='assets/images/django_red_s.jpg' alt='django unchained movie picture'>",
      question: "What did Leonardo DiCaprio do after accidentally crushing a glass and started bleeding during the filming of a dinner scene in 'Django Unchained'?", // Question no. 7
      answers: [{
          text: "He immediately called for medical assistance and halted the filming.",
          correct: false
        },
        {
          text: "He got really mad and lashed out on the film team.",
          correct: false
        },
        {
          text: "He ignored it, stayed in character, and continued with the scene.",
          correct: true
        },
        {
          text: "He insisted on reshooting the entire scene to avoid any signs of injury for future scenes.",
          correct: false
        },
      ]
    },
    {
      image: "<img src='assets/images/reservoir_dogs_s.jpg' alt='reservoir dogs movie picture'>",
      question: "In the iconic scene from 'Reservoir Dogs', what song does Mr. Blonde dance to while torturing a captured cop?", // Question no. 8
      answers: [{
          text: "'You Can't Hurry Love' by The Supremes.",
          correct: false
        },
        {
          text: "'Bohemian Rhapsody' by Queen.",
          correct: false
        },
        {
          text: "'Stuck in the Middle With You' by Stealers Wheel.",
          correct: true
        },
        {
          text: "'Sweet Home Alabama' by Lynyrd Skynyrd.",
          correct: false
        },
      ]
    },
    {
      image: "<img src='assets/images/hateful_eight_s.jpg' alt='hateful eight movie picture'>",
      question: "In the early development stages, what was the original concept and intended title for 'The Hateful Eight'?", // Question no. 9
      answers: [{
          text: "It was envisioned as a prequel to 'Django Unchained' titled 'The Birth of Hatred.'",
          correct: false
        },
        {
          text: "Tarantino intended it to be a spin-off featuring the character Django titled 'The D Is Silent'",
          correct: false
        },
        {
          text: "The initial idea was a crossover film combining characters from 'Inglourious Basterds' and 'Django Unchained'",
          correct: false
        },
        {
          text: "The concept began as a novel called 'Django in White Hell' before 'The Hateful Eight'",
          correct: true
        },
      ]
    },
    {
      image: "<img src='assets/images/once_upon_s.jpg' alt='once upon a time in hollywood movie picture'>",
      question: "Who portrayed the character of Sharon Tate in the film 'Once Upon a Time in Hollywood' and which infamous murderer was responsible for her death?", // Question no. 10/10
      answers: [{
          text: "Jennifer Lawrence - Ted Bundy",
          correct: false
        },
        {
          text: "Margot Robbie - Charles Manson",
          correct: true
        },
        {
          text: "Emma Stone - Jeffrey Dahmer",
          correct: false
        },
        {
          text: "Scarlett Johansson - John Wayne Gacy",
          correct: false
        },
      ]
    },

  ];

  /**
   * ############################## COUNTER & TIMER #####################################
   */

  let countOfQuestion = document.getElementById("number-of-q");
  let activeQuestionIndex = 0;
  let score = 0;

  let timerElement = document.getElementById('time-left'); // Displays time left in seconds
  let questionTime = 15; // Total time for each question in seconds
  let timer;

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
        // Disable answer buttons and show the next button
        disableAnswerButtons();
        btnNext.style.display = "block";
      }
    }, 1000);

    function disableAnswerButtons() {
      Array.from(btnAnswers.children).forEach(button => {
        button.disabled = true;
      });
    }

  }

  /**
   * ############################## QUIZ FUNCTIONS #####################################
   */


  // Function to shuffle the array to select question randomly
  function shuffleArray(allQuestions) {
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    return allQuestions;
  }

  // Function to start the Quiz
  function beginQuiz() {
    activeQuestionIndex = 0;
    score = 0;
    btnNext.innerHTML = "Next";
    shuffleArray(allQuestions);
    displayQuestion();
    countOfQuestion.textContent = `1 out of ${allQuestions.length}`;
  }

  // Function to display each question & answers & display image
  function displayQuestion() {
    resetState();
    clearInterval(timer);
    startTimer();
    let activeQuestion = allQuestions[activeQuestionIndex];
    let questionNumber = activeQuestionIndex + 1;
    quizQuestions.innerHTML = questionNumber + ". " + activeQuestion.question;

    movieImg.innerHTML = activeQuestion.image;
    movieImg.classList.add("quiz-img");
    countOfQuestion.textContent = `${activeQuestionIndex + 1} out of ${allQuestions.length}`;

    btnAnswers.innerHTML = "";

    // Generates answer buttons for each new answer in the active question
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
    btnNext.style.display = "none"; //hides the Next button on following question
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
      button.disabled = true; // takes away the ability re-select another answer. 
    });
    btnNext.style.display = "block"; // Displays Next button when an anwer is chosen
  }

  /**
   * ############################## NEXT BUTTON & HIGHSCORES #####################################
   */

  // Toggles to Score-Boz while updating the highscore list
  function toggleToScoreBox() { //
    updateHighscoreList();
    toggleBoxes(scoreBox, nameFirstBox, homeBox, gameBox, rulesBox);
  }

  // Function to display the score after the quiz
  function displayScore() {
    clearInterval(timer);
    resetState();
    countOfQuestion.style.display = "none";
    timerElement.style.display = "none";
    movieImg.style.display = "none";
    document.getElementById("timer").style.display = "none";

    // Add image when score is displayed
    const scoreImage = document.createElement("img");
    scoreImage.src = 'assets/images//collection_border.jpg';
    const scoreImgBox = document.getElementById("score-img"); // Append the image to div
    scoreImgBox.appendChild(scoreImage);
    scoreImage.style.marginTop = "50px";

    quizQuestions.innerHTML = `<div style="font-size: 2rem; color: yellow;">Wooow! <br>${username}, you scored <br>${score} out of ${allQuestions.length}!</div>`;

    // Save the highscores array to local storage
    localStorage.setItem("highscores", JSON.stringify(storedHighscores));

    // Retrieve highscores from local storage
    storedHighscores = JSON.parse(localStorage.getItem("highscores"));

    storedHighscores.forEach((userData) => {
      if (userData.name === username) {
        userData.score = score;
      }
    });

    // Styling to change the Next-button into button "See Highscore List" at end of quiz
    btnNext.innerHTML = "See Highscore List";
    btnNext.style.display = "block";
    btnNext.style.backgroundColor = "rgb(168, 26, 38)";
    btnNext.style.color = "white";
    btnNext.style.fontWeight = "bold";
    btnNext.style.marginRight = "60px";
    btnNext.style.width = "115px";
  }

  // Handles Next button - either moves to next question or displays score
  function handleBtnNext() {
    activeQuestionIndex++;
    if (activeQuestionIndex < allQuestions.length) {
      displayQuestion();
    } else {
      displayScore();
      btnNext.removeEventListener("click", handleBtnNext);
      btnNext.addEventListener("click", toggleToScoreBox);
    }
  }

  // Update the highscore list
  function updateHighscoreList() {
    let highscoreList = document.getElementById("highscore-list");

    // Clear the existing highscore list
    highscoreList.innerHTML = "";

    let highscores = [];

    // If there are stored highscores set the highscores array
    if (storedHighscores) {
      highscores = storedHighscores;
    }
    console.log(storedHighscores);

    // Sort the highscores array by score in descending order
    highscores.sort((a, b) => b.score - a.score);

    // Truncate the highscores array to a maximum of 5 entries
    highscores = highscores.slice(0, 5);

    // Loop through the highscore array and display each name and score pair
    for (let i = 0; i < highscores.length; i++) {
      const userScore = highscores[i];
      console.log(userScore.score, userScore.name);
      if (userScore.score > -1) {
        const listItem = document.createElement("li");
        listItem.textContent = `${i + 1}. ${userScore.name} | score: ${userScore.score}`;
        listItem.style.margin = "8px";
        listItem.style.display = "flex";
        listItem.style.justifyContent = "space-between";
        highscoreList.appendChild(listItem);
      }
    }
  }

  btnNext.addEventListener("click", handleBtnNext);

  beginQuiz();

});