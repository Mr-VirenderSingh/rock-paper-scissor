let compScoreDisplay = document.querySelector("#comp-score");
let userScoreDisplay = document.querySelector("#user-score");
const results = document.querySelector(".result");
const choices = document.querySelectorAll(".choice");
const p = document.createElement("p");
const startOver = document.querySelector("#action");

let userScore = 0;
let compScore = 0;
let playGame = true;


choices.forEach((event) =>
  event.addEventListener("click", (e) => {
    if (playGame) {
      let userChoose = e.target.id;
      let compChoose = compSelected();
      checkWinner(userChoose, compChoose);
      endGame();
    }
  })
);

function compSelected() {
  const compChoice = ["rock", "paper", "scissor"];
  let randomNum = compChoice[Math.floor(Math.random() * 3)];
  return randomNum;
}

function checkWinner(userChoose, compChoose) {
  if (userChoose === compChoose) {
    results.innerHTML = `You both choose ${userChoose}`;
  } else if (
    (userChoose === "rock" && compChoose === "scissor") ||
    (userChoose === "paper" && compChoose === "rock") ||
    (userChoose === "scissor" && compChoose === "paper")
  ) {
    userScore++;
    userScoreDisplay.innerHTML = userScore;
    results.innerHTML = `User: ${userChoose} beats Comp: ${compChoose}.`;
    return;
  } else {
    compScore++;
    compScoreDisplay.innerHTML = compScore;
    results.innerHTML = `Comp: ${compChoose} beats User: ${userChoose}.`;
    return;
  }
}

function endGame() {
  if (userScore === 5) {
    results.innerHTML = `You Win!`;
    startOver.classList.add('button');
    startOver.innerHTML = `Start New Game.`;
    playGame = false;
    newGame();
    return;
  } else if (compScore === 5) {
    results.innerHTML = `You Lose!`;
    startOver.classList.add('button');
    startOver.innerHTML = `Start New Game`;
    startOver.style.Border = ' 2px solid black';
    playGame = false;
    newGame();
    return;
  }
}

function newGame() {
  startOver.addEventListener('click', (e) => {
    userScore = 0;
    compScore = 0;
    compScoreDisplay.innerHTML = compScore;
    userScoreDisplay.innerHTML = userScore;
    startOver.innerHTML = '';
    playGame = true;
  })
}
