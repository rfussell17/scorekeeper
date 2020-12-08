const p1 = {
  score: 0,
  button: document.querySelector("#p1Btn"),
  display: document.querySelector("#p1ScoreDisplay"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Btn"),
  display: document.querySelector("#p2ScoreDisplay"),
};

const resetBtn = document.querySelector("#resetBtn");
const numLimit = document.querySelector("#numLimit");
let winningScore = 1;
let gameOver = false;

function updateScores(player, opponent) {
  if (!gameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      gameOver = true;
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.classList.add("gameOverBtn");
      opponent.button.classList.add("gameOverBtn");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

numLimit.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetGame();
});

resetBtn.addEventListener("click", resetGame);

function resetGame() {
  gameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("loser", "winner");
    p.button.disabled = false;
    p.button.classList.remove("gameOverBtn");
  }
}
