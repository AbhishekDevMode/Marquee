const guessInput = document.querySelector(".guess");
const checkbutton = document.querySelector(".btn");
const scoreLabel = document.querySelector(".score");
const messageLabel = document.querySelector(".message");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;

checkbutton.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess) {
    messageLabel.textContent = "No number Entered";
    score.textContent = score;
  } else if (userGuess === secretNumber) {
    messageLabel.textContent = "Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    score.textContent = score;
  } else {
    if (currentScore > 1) {
      currentScore--;
      scoreLabel.textContent = currentScore;
      messageLabel.textContent =
        userGuess > secretNumber ? "Too high" : "Too low";
    } else {
      messageLabel.textContent = "You lost the game";
      scoreLabel.textContent = 0;
    }
  }
});
