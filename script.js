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
// const computerChoice = getComputerChoice();
// console.log(computerChoice);

// Human Choice
function getHumanChoice() {
  const number = prompt("Enter 1. Rock 2. Paper and 3. Scissors");
  if (number == 1) {
    return "Rock";
  } else if (number == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
// console.log(getHumanChoice());

// Function for single play
const humanScore = 0;
const computerScore = 0;

function playRound(computerChoosed, humanChoosed) {
  if (computerChoosed == humanChoosed) {
    // humanScore = humanScore;
    // computerScore = computerScore;
    return `Both choosed same.`;
  } else if (computerChoosed == "Rock" && humanChoosed == "Scissors") {
    return `${computerChoosed} beats ${humanChoosed}.`;
  } else if (computerChoosed == "Sciisor" && humanChoosed == "Paper") {
    return `${computerChoosed} beats ${humanChoosed}.`;
  } else if (computerChoosed == "Paper" && humanChoosed == "Rock") {
    return `${computerChoosed} beats ${humanChoosed}.`;
  } else if (humanChoosed == "Rock" && computerChoosed == "Scissors") {
    return `${humanChoosed} beats ${computerChoosed}.`;
  } else if (humanChoosed == "Sciisor" && computerChoosed == "Paper") {
    return `${humanChoosed} beats ${computerChoosed}.`;
  } else if (humanChoosed == "Paper" && computerChoosed == "Rock") {
    return `${humanChoosed} beats ${computerChoosed}.`;
  } else return `Wrong Choice.`;
}
const computerChoosed = getComputerChoice();
const humanChoosed = getHumanChoice();
console.log(computerChoosed, humanChoosed);
console.log(playRound(computerChoosed, humanChoosed));
