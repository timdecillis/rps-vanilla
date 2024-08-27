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