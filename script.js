// for computer choice
// function getComputerChoice(min, max) {
//   number = Math.floor(Math.random() * (max - min) + min);
//   if (number === 1) {
//     return "Rock";
//   } else if (number === 2) {
//     return "Paper";
//   } else {
//     return "Scissors";
//   }
// }
// computerChoice = getComputerChoice(0, 3);
// console.log(computerChoice);

// Human Choice
humanChoice = prompt("Enter 1. Rock 2. Paper and 3. Scissors");
if (humanChoice == 1) {
  humanChoice = "Rock";
} else if (humanChoice == 2) {
  humanChoice = "Paper";
} else {
  humanChoice = "Scissors";
}
console.log(humanChoice);
