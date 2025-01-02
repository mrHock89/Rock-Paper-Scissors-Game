// for computer choice
function getComputerChoice(min, max) {
  number = Math.floor(Math.random() * (max - min) + min);
  if (number === 1) {
    return "Rock";
  } else if (number === 2) {
    return "Paper";
  } else {
    return "Scissor";
  }
}
computerChoice = getComputerChoice(0, 3);
console.log(computerChoice);
