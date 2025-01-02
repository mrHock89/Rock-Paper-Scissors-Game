// for computer choice
function getComputerChoice(min, max) {
  number = Math.floor(Math.random() * (max - min) + min);
  if (number === 1) {
    return "Rock";
  } else if (number === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
const computerChoice = getComputerChoice(0, 3);
console.log(computerChoice);

// Human Choice
function humanChoice() {
  const number = prompt("Enter 1. Rock 2. Paper and 3. Scissors");
  if (number == 1) {
    return "Rock";
  } else if (number == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
console.log(humanChoice());
const humanScore = 0;
const computerScore = 0;

function playRound(computerChoice, humanChoice) {}
