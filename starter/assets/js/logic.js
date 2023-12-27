const startGameBtn = document.querySelector('#start-screen');
const questionContainer = document.querySelector('#questions');
const choicesContainer = document.querySelector('#choices');
const questionTitle = document.querySelector('#question-title');


let currentQuestIndex = 0;


startGameBtn.addEventListener("click", startGame);

function startGame() {
  startGameBtn.classList.add("hide");
  questionContainer.classList.remove("hide");
  displayNextQuestion();
}


function displayNextQuestion() {
  while (choicesContainer.firstChild) {
    choicesContainer.removeChild(choicesContainer.firstChild)
  }
  questionTitle.textContent = question[currentQuestIndex].question;
  question[currentQuestIndex].answers.forEach(answer => {
    const newAnswer = document.createElement("button")
    newAnswer.classList.add("button", "answer")
    newAnswer.textContent = answer.option;
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct
    }
    choicesContainer.appendChild(newAnswer)
  })
}


const question = [
  {
    question: "Maths Calc: 10 x 15 ",
    answers: [
      { option: " 150", correct: true },
      { option: "1500", correct: false },
      { option: "15000", correct: false },
    ],
  },
  {
    question: "Maths Calc: 24 / 2 ",
    answers: [
      { option: "6", correct: false },
      { option: "10", correct: false },
      { option: "12", correct: true },
    ],
  },
  {
    question: "Maths Calc: 13% of 100 ",
    answers: [
      { option: "1.30", correct: false },
      { option: "13", correct: true },
      { option: "0.13", correct: false },
    ],
  },
  {
    question: "In which alternative are there three eights, three zero? ",
    answers: [
      { option: "3830", correct: false },
      { option: "88830", correct: true },
      { option: "383000", correct: false },
    ],
  },
  {
    question: " A small truck can carry 50 bags of sand or 400 bricks. If 32 bags of sand were placed in the truck, how many bricks can it carry? ",
    answers: [
      { option: "", correct: true },
      { option: "", correct: false },
      { option: "", correct: false },
    ],
  },
]

