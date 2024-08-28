import { state } from "./state.js";
import { winningCombos } from "./referenceData.js";
import { playButton } from "./referenceData.js";

let { humanScore, computerScore, count } = state;

export function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const number = Math.floor(Math.random() * 3);
  return choices[number];
}

export function getHumanChoice() {
  const choice = window.prompt(
    "please enter a choice of rock, paper, or scissors"
  );
  return choice;
}

export function playRound() {
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
  roundCount.textContent = `Rounds left: ${5 - count}`;
  window.alert(message);
  if (count === 5) {
    playButton.disabled = true;
    document.querySelector("#welcome").textContent = "The Game is Over";
    if (humanScore > computerScore) {
      return window.alert(`you won the game, ${humanScore}-${computerScore}!`);
    }
    if (computerScore > humanScore) {
      return window.alert(`you lost the game, ${humanScore}-${computerScore}!`);
    }
    return window.alert("the game is a draw");
  }
}
