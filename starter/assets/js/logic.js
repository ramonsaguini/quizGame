const startGameBtn = document.querySelector('#start-screen');
const questionContainer = document.querySelector('#questions');
const choicesContainer = document.querySelector('#choices');
const questionTitle = document.querySelector('#question-title');
const btnNextQuestion = document.querySelector('#next')
const timer = document.querySelector('#time')


startGameBtn.addEventListener("click", startGame);
btnNextQuestion.addEventListener("click", displayNextQuestion)

let currentQuestIndex = 0
let correctAnswer = 0


let timerInterval;
let seconds = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;
  document.getElementById("time").textContent = seconds
}
//! Start Game

function startGame() {
  startGameBtn.classList.add("hide");
  questionContainer.classList.remove("hide");
  displayNextQuestion();
  startTimer();
}


function displayNextQuestion() {
  resetState()

  if (question.length === currentQuestIndex) {
    return endGame()
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
    alert("Correct");
    correctAnswer++;
    seconds = seconds - 5

  } else {
    alert("Wrong");
    seconds = seconds + 2
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

function endGame() {
  const totQuest = question.length;
  const perform = Math.floor(correctAnswer * 100 / totQuest);

  clearInterval(timerInterval);

  let message = "";

  switch (true) {

    case (perform >= 90):
      message = "Excellent"
      break

    case (perform >= 70):
      message = "Very Good"
      break

    case (perform >= 50):
      message = "Good"
      break

    default:
      message = "you can improve next time"
  }
  questionContainer.innerHTML =
    `<p> Correct Answers: ${correctAnswer} of ${totQuest} Questions in ${seconds} seconds! <br>
<span> Result: ${message} </span>
</p>
<button onclick=window.location.reload()> Restart Quiz </button>
`
}

const question = [
  {
    question: "Maths Calc: 10 x 15 ",
    answers: [
      { option: "500", correct: false },
      { option: " 150", correct: true },
      { option: "1500", correct: false },
      { option: "15000", correct: false },
    ],
  },
  {
    question: "Maths Calc: 24 / 2 ",
    answers: [
      { option: "9", correct: false },
      { option: "10", correct: false },
      { option: "11", correct: false },
      { option: "12", correct: true },
    ],
  },
  {
    question: "Maths Calc: 13% of 100 ",
    answers: [
      { option: "1.30", correct: false },
      { option: "13.0", correct: false },
      { option: "13", correct: true },
      { option: "0.13", correct: false },
    ],
  },
  {
    question: "In which alternative are there three eights, three zero? ",
    answers: [
      { option: "3830", correct: false },
      { option: "88830", correct: true },
      { option: "38300", correct: false },
      { option: "383000", correct: false },
    ],
  },
  {
    question: " A small truck can carry 50 bags of sand or 400 bricks. If 32 bags of sand were placed in the truck, how many bricks can it carry? ",
    answers: [
      { option: "368", correct: true },
      { option: "226", correct: false },
      { option: "286", correct: false },
      { option: "826", correct: false },
    ],
  },
]

