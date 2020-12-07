let p1Score = 0;
let p2Score = 0;
const numLimit = document.querySelector('#numLimit');

const plScoreDisplay = document.getElementById("plScoreDisplay");
const p2ScoreDisplay = document.getElementById("p2ScoreDisplay");

p1ScoreDisplay.textContent = 0;
p2ScoreDisplay.textContent = 0;

let winningScore = 1;

let gameOver = false;

const p1Btn = document.getElementById("p1Btn");
const p2Btn = document.getElementById("p2Btn");
const resetBtn = document.getElementById("resetBtn");

p1Btn.addEventListener("click", function () {
  console.log("click1")
  if (!gameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      gameOver = true;
      p1ScoreDisplay.style.color = "green";
      p2ScoreDisplay.style.color = "red";
    } 
    p1ScoreDisplay.textContent = p1Score;
  }
});

p2Btn.addEventListener("click", function () {
  console.log("click2")
  if (!gameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      gameOver = true;
      p2ScoreDisplay.style.color = "green";
      p1ScoreDisplay.style.color = "red";
    } 
    p2ScoreDisplay.textContent = p2Score;
  }
});

const resetGame = () => {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1ScoreDisplay.textContent = p1Score;
  p2ScoreDisplay.textContent = p2Score;
  p2ScoreDisplay.style.color = "black";
  p1ScoreDisplay.style.color = "black";
}

resetBtn.addEventListener("click", resetGame);

numLimit.addEventListener('change', function () {
  winningScore = parseInt(this.value)
  resetGame()
})




