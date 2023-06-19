document.addEventListener("DOMContentLoaded", () => {

  // Get boxes 
  const homeBox = document.getElementById('home-box');
  const rulesBox = document.getElementById('rules-box');
  const nameFirstBox = document.getElementById('name-first-box');
  const gameBox = document.getElementById('game-box');
  const scoreBox = document.getElementById('score-box');

  // Get buttons
  const btnToRules = document.getElementById('btn-rules'); 
  const btnToQuiz = document.getElementById('btn-to-quiz'); 
  const btnToHighScoreList = document.getElementById('btn-highscore'); 
  const btnToNameFirst = document.getElementById('btn-to-name-first'); 
  const btnToNameFirst2 = document.getElementById('btn-to-name-first-2'); 
  const btnExitToHome = document.getElementById('btn-exit'); 
  const btnExitToHome2 = document.getElementById('btn-exit-2'); 
  const btnExitToHome3 = document.getElementById('btn-exit-3');
  let btnSubmitName = document.getElementById('btn-submit');

  // Scorelist
  let scoreList = document.querySelector('.score-list');


  // Initially hide all boxes except the homeBox
  gameBox.classList.add('hidden');
  rulesBox.classList.add('hidden');
  nameFirstBox.classList.add('hidden');
  scoreBox.classList.add('hidden');

 // Toggles between the desired "boxes" to be shown/hidden
function toggleBoxes(elementToShow, ...elementsToHide) {
  elementToShow.classList.remove('hidden'); // Show the element

  for (const element of elementsToHide) {
    element.classList.add('hidden'); // Hide the elements
  }
}

  btnToNameFirst.addEventListener("click", () => toggleBoxes(nameFirstBox, homeBox, gameBox, rulesBox, scoreBox));
  btnToNameFirst2.addEventListener("click", () => toggleBoxes(nameFirstBox, homeBox, gameBox, rulesBox, scoreBox));
  
  btnToQuiz.addEventListener("click", () => toggleBoxes(gameBox, homeBox, rulesBox, nameFirstBox, scoreBox));
  btnToRules.addEventListener("click", () => toggleBoxes(rulesBox, homeBox, nameFirstBox, gameBox, scoreBox));
  btnToHighScoreList.addEventListener("click", () => toggleBoxes(scoreBox, homeBox, rulesBox, nameFirstBox, gameBox));
  
  btnExitToHome.addEventListener("click", () => toggleBoxes(homeBox, nameFirstBox, gameBox, rulesBox, scoreBox));
  btnExitToHome2.addEventListener("click", () => toggleBoxes(homeBox, nameFirstBox, gameBox, rulesBox, scoreBox));
  btnExitToHome3.addEventListener("click", () => toggleBoxes(homeBox, nameFirstBox, gameBox, rulesBox, scoreBox));


  // QUIZ QUESTIONS ARRAY

  const allQuestions = [{
      image: "<img src='assets/images/inglorious_basterds_s.jpg' alt='inglorious basterds movie picture'>",
      question: "How was the intense strangulation scene in the film 'Inglourious Basterds' achieved?",
      answers: [{
          text: "It was created using advanced visual effects and CGI techniques.",
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
      question: "In the film 'Kill Bill', what is a unique characteristic of the onscreen deaths of the characters?",
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
      question: "What can be said about the biblical passage recited by Jules in 'Pulp Fiction', played by Samuel L. Jackson, known as Ezekiel 25:17?",
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
      question: "Among the following actors, who has been seen the most in Quentin Tarantino's movies, ranked from most to least appearances?",
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
      question: "What collaboration occurred between Tarantino and Robert Kurtzman that led to Tarantino writing the script to From Dusk Till Dawn?",
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
      question: "In Jackie Brown, Samuel L. Jackson delivers an iconic performance with his character's dialogue. What notable word does he frequently use in the film?",
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
      question: "What did Leonardo DiCaprio do after accidentally crushing a glass and started bleeding during the filming of a dinner scene in 'Django Unchained'?",
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
      question: "In the iconic scene from 'Reservoir Dogs', what song does Mr. Blonde dance to while torturing a captured cop?",
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
      question: "In the early development stages, what was the original concept and intended title for 'The Hateful Eight'?",
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
      question: "Who portrayed the character of Sharon Tate in the film 'Once Upon a Time in Hollywood' and which infamous murderer was responsible for her death?",
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

  const quizQuestions = document.getElementById('questions');
  const btnNext = document.getElementById('btn-next');
  const btnAnswers = document.getElementById('answer-btns');
  const movieImg = document.getElementById('quiz-img');

  let countOfQuestion = document.getElementById("number-of-q");
  let activeQuestionIndex = 0;
  let score = 0;

  let timeLeft = document.querySelector(".time-left");
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
  
      if (currentTime === 0) {
        clearInterval(timer);
        handleNextButton();
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


  function displayScore() {
    resetState();
    countOfQuestion.style.display = "none"; //removes the question counter
    timerElement.style.display = "none"; //removes the timer counting down 
    movieImg.style.display = "none"; // removes the last image from the question array 

    quizQuestions.innerHTML = `Your score: ${score} out of ${allQuestions.length}!`;
    btnNext.innerHTML = "Play again";
    btnNext.style.display = "block";
  }

  function handleBtnNext() {
    activeQuestionIndex++;
    if (activeQuestionIndex < allQuestions.length) {
      displayQuestion();
      clearInterval(timer);
      startTimer(questionTime);
    } else {
      displayScore();
    }
  }

  btnNext.addEventListener("click", () => {
    if (activeQuestionIndex < allQuestions.length) {
      handleBtnNext();
    } else {
      beginQuiz();
    }
  });

  beginQuiz();

});