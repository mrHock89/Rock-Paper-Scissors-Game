// Starting over for rock-paper-scissor-game with gui implementation

// let humanScore = 0;
// let computerScore = 0;

// // for computer choice
// function getComputerChoice() {
//   const min = 0;
//   const max = 3;
//   number = Math.floor(Math.random() * (max - min) + min);
//   if (number === 1) {
//     return "Rock";
//   } else if (number === 2) {
//     return "Paper";
//   } else {
//     return "Scissors";
//   }
// }

// // Human Choice
// function getHumanChoice() {
//   const number = prompt(
//     "Enter from 1 to 3\n 1. Rock \n 2. Paper \n 3. Scissors"
//   );
//   if (number == 1) {
//     return "Rock";
//   } else if (number == 2) {
//     return "Paper";
//   } else {
//     return "Scissors";
//   }
// }

// function playRound(computerChoosed, humanChoosed) {
//   if (computerChoosed == humanChoosed) {
//     humanScore = humanScore;
//     computerScore = computerScore;
//   } else if (computerChoosed == "Rock" && humanChoosed == "Scissors") {
//     computerScore++;
//   } else if (computerChoosed == "Scissors" && humanChoosed == "Paper") {
//     computerScore++;
//   } else if (computerChoosed == "Paper" && humanChoosed == "Rock") {
//     computerScore++;
//   } else if (humanChoosed == "Rock" && computerChoosed == "Scissors") {
//     humanScore++;
//   } else if (humanChoosed == "Scissors" && computerChoosed == "Paper") {
//     humanScore++;
//   } else if (humanChoosed == "Paper" && computerChoosed == "Rock") {
//     humanScore++;
//   }
//   console.log(computerScore, humanScore);
// }
// // function playGame() {
// //   for (let i = 0; i < 5; i++) {
// //     playRound(getComputerChoice(), getHumanChoice());
// //   }
// //   // Added for showing winner output every time
// //   if (computerScore > humanScore) {
// //     alert("Computer wins.");
// //   } else if (humanScore > computerScore) {
// //     alert("Human Wins.");
// //   } else {
// //     alert("Tie.");
// //   }
// // }

// // playGame();

// have to create a function that will return computer choice
// console.log("Started a game.");

// all variables

let humanScore = 0;
let computerScore = 0;

// creating all required elements
const scoreDiv = document.createElement("div");
scoreDiv.id = "scoreDiv";
const mainBody = document.body;

const infoScore = document.createElement("p");
infoScore.setAttribute("id", "infoScore");

const humanScoreBoard = document.createElement("h3");
humanScoreBoard.setAttribute("id", "humanScoreBoard");

const computerScoreBoard = document.createElement("h3");
computerScoreBoard.setAttribute("id", "computerScoreBoard");

const winMessage = document.createElement("h2");
winMessage.setAttribute("id", "winMessage");

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
let computer_choice;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    human_choice = button.id;
    computer_choice = computerChoice();
    console.log(
      `Computer Choice: ${computer_choice} and Human Choice: ${human_choice}`
    );
    // Playing The game
    playGame(computer_choice, human_choice);
  });
});

function playGame(computerMove, humanMove) {
  // a function that will update score
  function updateScoreInScoreBoard(computerScore, humanScore, textInfo) {
    infoScore.textContent = textInfo;
    humanScoreBoard.textContent = `Human Score: ${humanScore}`;
    computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
  }

  // if Reset button is pressed
  if (humanMove === "Reset") {
    computerScore = 0;
    humanScore = 0;
    updateScoreInScoreBoard(computerScore, humanScore, "Get is Restarted!");
  }
  if (computerMove === humanMove) {
    updateScoreInScoreBoard(
      computerScore,
      humanScore,
      `computer: ${computerMove} Vs human: ${humanMove}`
    );
  }
  if (computerMove === "Rock" && humanMove === "Scissors") {
    computerScore++;
    updateScoreInScoreBoard(
      computerScore,
      humanScore,
      `computer: ${computerMove} Vs human: ${humanMove}`
    );
  } else if (computerMove === "Scissors" && humanMove === "Paper") {
    computerScore++;
    updateScoreInScoreBoard(
      computerScore,
      humanScore,
      `computer: ${computerMove} Vs human: ${humanMove}`
    );
  } else if (computerMove === "Paper" && humanMove === "Rock") {
    computerScore++;
    updateScoreInScoreBoard(
      computerScore,
      humanScore,
      `computer: ${computerMove} Vs human: ${humanMove}`
    );
  } else if (humanMove === "Rock" && computerMove === "Scissors") {
    humanScore++;
    updateScoreInScoreBoard(
      computerScore,
      humanScore,
      `computer: ${computerMove} Vs human: ${humanMove}`
    );
  } else if (humanMove === "Scissors" && computerMove === "Paper") {
    humanScore++;
    updateScoreInScoreBoard(
      computerScore,
      humanScore,
      `computer: ${computerMove} Vs human: ${humanMove}`
    );
  } else if (humanMove === "Paper" && computerMove === "Rock") {
    humanScore++;
    updateScoreInScoreBoard(
      computerScore,
      humanScore,
      `computer: ${computerMove} Vs human: ${humanMove}`
    );
  }

  scoreBoard(computerScore, humanScore);
}

function scoreBoard(computerScore, humanScore) {
  if (computerScore == 5) {
    winMessage.textContent = "Computer is the winner!";
    scoreDiv.appendChild(winMessage);
  } else if (humanScore == 5) {
    winMessage.textContent = "Human is the winner";
    scoreDiv.appendChild(winMessage);
  }
}

infoScore.style.color = "blue";
infoScore.style.fontStyle = "italic";

humanScoreBoard.textContent = "Human Score: " + humanScore;
computerScoreBoard.textContent = "Computer Score: " + computerScore;

scoreDiv.setAttribute(
  "style",
  "margin-top: 15px; padding: 5px; border: 3px solid black;"
);

scoreDiv.appendChild(infoScore);
scoreDiv.appendChild(humanScoreBoard);
scoreDiv.appendChild(computerScoreBoard);
mainBody.appendChild(scoreDiv);
// function playRound(computerChoosed, humanChoosed) {
//   if (humanChoosed == "Reset") {
//     humanScore = 0;
//     computerScore = 0;
//   }
//   if (computerChoosed == humanChoosed) {
//     humanScore = humanScore;
//     computerScore = computerScore;
//   } else if (computerChoosed == "Rock" && humanChoosed == "Scissors") {
//     computerScore++;
//   } else if (computerChoosed == "Scissors" && humanChoosed == "Paper") {
//     computerScore++;
//   } else if (computerChoosed == "Paper" && humanChoosed == "Rock") {
//     computerScore++;
//   } else if (humanChoosed == "Rock" && computerChoosed == "Scissors") {
//     humanScore++;
//   } else if (humanChoosed == "Scissors" && computerChoosed == "Paper") {
//     humanScore++;
//   } else if (humanChoosed == "Paper" && computerChoosed == "Rock") {
//     humanScore++;
//   }
//   Score(computerScore, humanScore);
// }

// Score Board

// function Score(computer_score, human_score) {
//   if (computer_score === 5) {
//     console.log("The winner is computer.");
//   } else if (human_score === 5) {
//     console.log("The winner is human.");
//   } else {
//     console.log(`${computer_score} ${human_score}`);
//   }
// }
