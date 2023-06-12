document.addEventListener("DOMContentLoaded", () => {

// Get boxes 
const homeBox = document.querySelector('.home-box');  
const nameFirstBox = document.querySelector('.name-first-box');
const gameBox = document.querySelector('.game-box');


// Get buttons
const btnToQuiz = document.querySelector('.btn-to-quiz');
const btnNameFirst = document.querySelector('.btn-to-name-first');
const btnExit = document.querySelector('.btn-exit');
let btnSubmit = document.querySelector('#btn-submit');

// Get Finished Quiz background & Scorelist


function toggleBoxes(ToShow, ...ToHide) {
    ToShow.classList.remove("hidden"); // This shows the first element
  
    for (const element of ToHide) {
      element.classList.add("hidden"); // This hides the rest of the elements
    }
  }
  
  btnNameFirst.addEventListener("click", () => toggleBoxes(nameFirstBox, homeBox, gameBox,));
  btnToQuiz.addEventListener("click", () => toggleBoxes(gameBox, homeBox, nameFirstBox));
  btnExit.addEventListener("click", () => toggleBoxes(homeBox, nameFirstBox, gameBox));

  

});


// QUIZ QUESTIONS ARRAY

const questions = [
  {
    q: "1. How was the intense strangulation scene in the film 'Inglourious Basterds' achieved?",
    anwers: [
      { text: "It was created using advanced visual effects and CGI techniques.", correct: false},
      { text: "A professional stunt double simulated the strangulation with careful choreography.", correct: false},
      { text: "Illusion was created of camera angles, editing, and realistic sound effects.", correct: false},
      { text: "Tarantino himself strangled Diane Kruger to the point of losing consciousness to get the scene right", correct: true},
    ]
  },
  {
    q: "2. In the film 'Kill Bill', what is a unique characteristic of the onscreen deaths of the characters?",
    anwers: [
      { text: "All onscreen deaths are executed by male characters, emphasizing their dominance.", correct: false},
      { text: "Every character that dies onscreen is killed by a female, with the exception of the anime insert.", correct: true},
      { text: "The deaths are depicted through various supernatural and mystical means.", correct: false},
      { text: "Each death is a result of intricate traps and devices set by the main protagonist, The Bride.", correct: false},
    ]
  },
  {
    q: "3. What can be said about the biblical passage recited by Jules in 'Pulp Fiction', played by Samuel L. Jackson, known as Ezekiel 25:17?",
    anwers: [
      { text: "It's a modified version of the original biblical passage, tailored specifically for the film's narrative", correct: false},
      { text: "It's an authentic excerpt from the Book of Ezekiel in the Bible.", correct: false},
      { text: "It was mostly made up by Tarantino and Jackson themselves", correct: true},
      { text: "It is a direct quote from a lesser-known ancient scripture, not included in the traditional Bible.", correct: false},
    ]
  },
  {
    q: "4. Among the following actors, who has been seen the most in Quentin Tarantino's movies, ranked from most to least appearances?",
    anwers: [
      { text: "Samuel L. Jackson, Leonardo DiCaprio, Christoph Waltz", correct: false},
      { text: "Harvey Keitel, Leonardo DiCaprio, Steve Buscemi", correct: false},
      { text: "Samuel L. Jackson, Tim Roth, Michael Madsen ", correct: true},
      { text: "Leonardo DiCaprio, Brad Pitt, Christoph Waltz", correct: false},
    ]
  },
  {
    q: "5. What collaboration occurred between Tarantino and Robert Kurtzman that led to Tarantino writing the script to From Dusk Till Dawn?",
    anwers: [
      { text: "They collaborated on a special effects project for Oliver Stone when the idea came up.", correct: false},
      { text: "It was in exchange for Kurtzman to provide the special effects for the ear-slicing scene in Reservoir Dogs. ", correct: true},
      { text: "They co-directed a secret short film prior to From Dusk Till Dawn.", correct: false},
      { text: "While working on a snuff movie, losing a bet let to the promise of writing the script.", correct: false},
    ]
  },
  {
    q: "6. In Jackie Brown, Samuel L. Jackson delivers an iconic performance with his character's dialogue. What notable word does he frequently use in the film?",
    anwers: [
      { text: "motherfu**er", correct: true},
      { text: "Damn", correct: false},
      { text: "Badass", correct: false},
      { text: "Cool", correct: false},
    ]
  },
  {
    q: "7. What did Leonardo DiCaprio do after accidentally crushing a glass and started bleeding during the filming of a dinner scene in 'Django Unchained'?",
    anwers: [
      { text: "He immediately called for medical assistance and halted the filming.", correct: false},
      { text: "He got really mad and lashed out on the film team.", correct: false},
      { text: "He ignored it, stayed in character, and continued with the scene.", correct: true},
      { text: "He insisted on reshooting the entire scene to avoid any signs of injury for future scenes.", correct: false},
    ]
  },
  {
    q: "8. In the iconic scene from 'Reservoir Dogs', what song does Mr. Blonde dance to while torturing a captured cop?",
    anwers: [
      { text: "'You Can't Hurry Love' by The Supremes.", correct: false},
      { text: "'Bohemian Rhapsody' by Queen.", correct: false},
      { text: "'Stuck in the Middle With You' by Stealers Wheel.", correct: true},
      { text: "'Sweet Home Alabama' by Lynyrd Skynyrd.", correct: false},
    ]
  },
  {
    q: "9. In the early development stages, what was the original concept and intended title for 'The Hateful Eight'?",
    anwers: [
      { text: "It was envisioned as a prequel to 'Django Unchained' titled 'The Birth of Hatred.'", correct: false},
      { text: "Tarantino intended it to be a spin-off featuring the character Django titled 'The D Is Silent'", correct: true},
      { text: "The initial idea was a crossover film combining characters from 'Inglourious Basterds' and 'Django Unchained'", correct: false},
      { text: "The concept began as a novel called 'Django in White Hell' before 'The Hateful Eight'", correct: false},
    ]
  },
  {
    q: "7. Who portrayed the character of Sharon Tate in the film 'Once Upon a Time in Hollywood' and which infamous murderer was responsible for her death?",
    anwers: [
      { text: "Jennifer Lawrence - Ted Bundy", correct: false},
      { text: "Scarlett Johansson - John Wayne Gacy", correct: true},
      { text: "Emma Stone - Jeffrey Dahmer", correct: false},
      { text: "Scarlett Johansson - John Wayne Gacy", correct: false},
    ]
  },

]
