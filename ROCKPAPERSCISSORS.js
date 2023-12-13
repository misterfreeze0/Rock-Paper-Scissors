const buttonRock = document.querySelector('#Rock');
const buttonPaper = document.querySelector('#Paper');
const buttonScissors = document.querySelector('#Scissors');
const resultDisplay = document.querySelector('.content');

let playerScore = 0;
let computerScore = 0;

buttonRock.addEventListener('click', () => onButtonClick('ROCK'));
buttonPaper.addEventListener('click', () => onButtonClick('PAPER'));
buttonScissors.addEventListener('click', () => onButtonClick('SCISSORS'));

function onButtonClick(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  displayResult(result);
}

function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  let result;

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    result = `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}!`;
  }

  return result;
}

function updateScore(result) {
    if(result.includes('win')) {
        playerScore++; 
    }   else if (result.includes('lose')) {
        computerScore++;
    }

    if(playerScore == 5 || computerScore == 5) {
        announceWinner();
    }
}

function displayResult(result) {
  resultDisplay.textContent = result;
}

function announceWinner() {
    if (playerScore > computerScore) {
      resultDisplay.textContent = "Congratulations! You are the winner!";
    } else if (playerScore < computerScore) {
      resultDisplay.textContent = "Sorry, you lost. Better luck next time!";
    } else {
      resultDisplay.textContent = "It's a tie! No winner."; 
    }
}
