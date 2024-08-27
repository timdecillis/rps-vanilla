export function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const number = Math.floor(Math.random() * 3);
  return choices[number];
}
