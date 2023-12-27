const startGameBtn = document.querySelector('#start-screen');
const questionContainer = document.querySelector('#questions')
startGameBtn.addEventListener("click", startGame);

function startGame() {
  startGameBtn.classList.add("hide");

}