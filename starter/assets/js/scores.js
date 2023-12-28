document.addEventListener("DOMContentLoaded", function () {
  function displayHighScores() {
    const highScoresContainer = document.querySelector('#high-scores');
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.forEach(score => {
      const scoreItem = document.createElement('li');
      scoreItem.textContent = `${score.playerName}: Correct Answers: ${score.score} .  Time: ${score.time} seconds - ${score.message}`;
      highScoresContainer.appendChild(scoreItem);
    });
  }

  window.onload = displayHighScores;

  function clearScores() {
    localStorage.clear();
    window.location.reload();
  }

  let clearBtn = document.querySelector("#remove");
  clearBtn.addEventListener("click", clearScores);
});