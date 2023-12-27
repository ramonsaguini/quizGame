const startGameBtn = document.querySelector('#start-screen');
const questionContainer = document.querySelector('#questions');
const choicesContainer = document.querySelector('#choices');
const questionTitle = document.querySelector('#question-title');
const btnNextQuestion = document.querySelector('#next')

startGameBtn.addEventListener("click", startGame);
btnNextQuestion.addEventListener("click", displayNextQuestion)

let currentQuestIndex = 0


function startGame() {
  startGameBtn.classList.add("hide");
  questionContainer.classList.remove("hide");
  displayNextQuestion();
}


function displayNextQuestion() {
  resetState()
  questionTitle.textContent = question[currentQuestIndex].question;
  question[currentQuestIndex].answers.forEach(answer => {
    const newAnswer = document.createElement("button")
    newAnswer.classList.add("button", "answer")
    newAnswer.textContent = answer.option;
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct
    }
    choicesContainer.appendChild(newAnswer)
    newAnswer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while (choicesContainer.firstChild) {
    choicesContainer.removeChild(choicesContainer.firstChild)
  }
  btnNextQuestion.classList.add("hide")
}


function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    alert("Correct")

  } else {
    alert("Wrong")
  }

  document.querySelectorAll(".answer").forEach(button => {
    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
    button.disabled = true
  })
  btnNextQuestion.classList.remove("hide")
  currentQuestIndex++
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
      { option: "1", correct: true },
      { option: "2", correct: false },
      { option: "3", correct: false },
    ],
  },
]

