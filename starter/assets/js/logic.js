const startGameBtn = document.querySelector('#start-screen');
const questionContainer = document.querySelector('#questions');
const choicesContainer = document.querySelector('#choices');
const questionTitle = document.querySelector('#question-title');
const btnNextQuestion = document.querySelector('#next')
const timer = document.querySelector('#time')
const audioIncorrect = document.querySelector('#incorrect')
const finalScore = document.querySelector('#end-screen')
let currentQuestIndex = 0
let correctAnswer = 0
let timerInterval;
let seconds = 0;

//! //////////// Event Click ////////////

startGameBtn.addEventListener("click", startGame);
btnNextQuestion.addEventListener("click", displayNextQuestion)

//! //////////// Start Timer //////////// 

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

//! //////////// Timer counting ////////////

function updateTimer() {
  seconds++;
  document.getElementById("time").textContent = seconds
}

//! //////////// Start Game ////////////

function startGame() {
  startGameBtn.classList.add("hide");
  questionContainer.classList.remove("hide");
  displayNextQuestion();
  startTimer();

}

//! //////////// Show Next Quest ////////////

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

//! ////////// Reset State  ////////////
function resetState() {
  while (choicesContainer.firstChild) {
    choicesContainer.removeChild(choicesContainer.firstChild)
  }
  btnNextQuestion.classList.add("hide")
}


//! ////////// Select Answer ////////////

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    const audioCorrect = document.querySelector('.correct');
    audioCorrect.play()
    correctAnswer++;
    seconds = seconds - 5;


  } else {
    const audioIncorrect = document.querySelector('.incorrect');
    audioIncorrect.play()
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

//! //////////// End Game Function /////////////

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
      message = "You can improve next time"
  }
  questionContainer.classList.add("hide")
  finalScore.classList.remove("hide")
  finalScore.innerHTML =
    ` <h2>All done!</h2>
    <p>Your final score is ${correctAnswer} of ${totQuest} Questions in ${(seconds)} seconds! <br>
    <h3> ${message} </h3></p>
    <p>Enter initials: <input type="text" id="initials" max="3">
    <button id="submit">Submit</button></p>`;

  //! ////////////Local Storage //! ////////////

  const initialsInput = document.querySelector('#initials');
  const submitButton = document.querySelector('#submit');

  submitButton.addEventListener('click', function () {

    const initials = initialsInput.value.trim().toUpperCase();

    if (initials) {
      const oldScores = JSON.parse(localStorage.getItem('scores')) || [];
      const newScore = {
        playerName: initials,
        score: correctAnswer,
        totalQuestions: totQuest,
        time: seconds,
        message: message,
      };
      oldScores.push(newScore);
      localStorage.setItem('scores', JSON.stringify(oldScores));
    }
    window.location.reload();
  });
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
