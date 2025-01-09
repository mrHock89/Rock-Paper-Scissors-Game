let humanScore = 0;
let computerScore = 0;

// computer choice function
function computerChoice() {
  let com_choice = ["Rock", "Paper", "Scissors"];

  // have to build logic by which we can select the computer choice form the array ramdomly
  let i = Math.floor(Math.random() * com_choice.length);
  let r = com_choice[i];
  return r;
}

// human choice function
let human_choice;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    human_choice = button.id;
    playRound(computerChoice(), human_choice);
  });
});

function playRound(computerChoosed, humanChoosed) {
  if (humanChoosed == "Reset") {
    humanScore = 0;
    computerScore = 0;
  }
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
  Score(computerScore, humanScore);
}

// Score Board
const div = document.createElement("div");
div.setAttribute("class", "score");
const RunningSrcore = document.createElement("p");
RunningSrcore.setAttribute("class", "r_socre");

function Score(computer_score, human_score) {
  if (computer_score === 5) {
    console.log("The winner is computer.");
  } else if (human_score === 5) {
    console.log("The winner is human.");
  } else {
    console.log(`${computer_score} ${human_score}`);
  }
}
