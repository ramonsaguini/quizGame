document.addEventListener("DOMContentLoaded", function () {
  function displayHighScores() {
    const highScoresContainer = document.querySelector('#high-scores');
    const scores = JSON.parse(localStorage.getItem('scores')) || [];

    scores.sort((a, b) => {
      if (a.score === b.score) {
        return a.time - b.time;
      }
      return b.score - a.score;
    });

    scores.forEach(score => {
      const scoreItem = document.createElement('li');
      scoreItem.textContent = `${score.playerName}: Score: ${score.score} .  Time: ${score.time} seconds - ${score.message}`;
      highScoresContainer.appendChild(scoreItem);
    });
  }

  displayHighScores();

  function clearScores() {
    localStorage.clear();
    window.location.reload();
  }

  let clearBtn = document.querySelector("#remove");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearScores);
  }
});
