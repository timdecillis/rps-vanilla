function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const number = Math.floor(Math.random() * 3);
  return choices[number];
}

function getHumanChoice() {
  const choice = window.prompt(
    "please enter a choice of rock, paper, or scissors"
  );
  return choice;
}

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;
  let count = 0;

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

    if (humanChoice === computerChoice) {
      message = "draw";
    } else if (computerChoice === winningCombos[humanChoice]) {
      humanScore++;
      message = `${humanChoice} beats ${computerChoice}, you win! the score is ${humanScore}-${computerScore}`;
    } else {
      computerScore++;
      message = `${computerChoice} beats ${humanChoice}, you lose! the score is ${humanScore}-${computerScore}`;
    }
    count++;
    return window.alert(message);
  }

  while (count < 5) {
    playRound();
  }
  if (humanScore > computerScore) {
    return window.alert(`you won the game, ${humanScore}-${computerScore}!`);
  }
  if (computerScore > humanScore) {
    return window.alert(`you lost the game, ${humanScore}-${computerScore}!`);
  }
  const yourScore = document.querySelector(".your-score");
  yourScore.textContent = "FOO";
  return window.alert(`the game is a draw, ${humanScore}-${computerScore}`);
};

playGame();
