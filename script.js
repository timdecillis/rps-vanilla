import { getComputerChoice } from "./helpers.js";

function getHumanChoice() {
  const choice = window.prompt(
    "please enter a choice of rock, paper, or scissors"
  );
  return choice;
}

let humanScore = 0;
let computerScore = 0;
let count = 0;
const playButton = document.querySelector("#play-round");
playButton.addEventListener("click", playRound);

function playRound() {
  const winningCombos = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  const humanChoice = getHumanChoice().toLowerCase();
  if (!Object.keys(winningCombos).includes(humanChoice))
    return window.alert("please enter a valid choice!");
  const computerChoice = getComputerChoice();
  let message = "";

  const humanScoreCount = document.querySelector("#your-score");
  const computerScoreCount = document.querySelector("#computer-score");
  const roundCount = document.querySelector("#round-count");

  if (humanChoice === computerChoice) {
    message = "draw";
  } else if (computerChoice === winningCombos[humanChoice]) {
    humanScore++;
    humanScoreCount.textContent = `Your score: ${humanScore}`;
    message = `${humanChoice} beats ${computerChoice}, you win! the score is ${humanScore}-${computerScore}`;
  } else {
    computerScore++;
    computerScoreCount.textContent = `Computer score: ${computerScore}`;
    message = `${computerChoice} beats ${humanChoice}, you lose! the score is ${humanScore}-${computerScore}`;
  }
  count++;
  roundCount.textContent = `Round number: ${count}`;
  window.alert(message);
  if (count === 5) {
    playButton.disabled = true;
    if (humanScore > computerScore) {
      return window.alert(`you won the game, ${humanScore}-${computerScore}!`);
    }
    if (computerScore > humanScore) {
      return window.alert(`you lost the game, ${humanScore}-${computerScore}!`);
    }
    return window.alert("the game is a draw");
  }
}
