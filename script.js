let humanScore = 0;
let computerScore = 0;

// for computer choice
function getComputerChoice() {
  const min = 0;
  const max = 3;
  number = Math.floor(Math.random() * (max - min) + min);
  if (number === 1) {
    return "Rock";
  } else if (number === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Human Choice
function getHumanChoice() {
  const number = prompt(
    "Enter from 1 to 3\n 1. Rock \n 2. Paper \n 3. Scissors"
  );
  if (number == 1) {
    return "Rock";
  } else if (number == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(computerChoosed, humanChoosed) {
  if (computerChoosed == humanChoosed) {
    humanScore = humanScore;
    computerScore = computerScore;
  } else if (computerChoosed == "Rock" && humanChoosed == "Scissors") {
    computerScore++;
  } else if (computerChoosed == "Scissors" && humanChoosed == "Paper") {
    computerScore++;
  } else if (computerChoosed == "Paper" && humanChoosed == "Rock") {
    computerScore++;
  } else if (humanChoosed == "Rock" && computerChoosed == "Scissors") {
    humanScore++;
  } else if (humanChoosed == "Scissors" && computerChoosed == "Paper") {
    humanScore++;
  } else if (humanChoosed == "Paper" && computerChoosed == "Rock") {
    humanScore++;
  }
  console.log(computerScore, humanScore);
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), getHumanChoice());
  }
  if (computerScore > humanScore) {
    alert("Computer wins.");
  } else if (humanScore > computerScore) {
    alert("Human Wins.");
  } else {
    alert("Tie.");
  }
}

playGame();
