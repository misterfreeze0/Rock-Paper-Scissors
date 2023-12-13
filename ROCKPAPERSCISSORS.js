
  const playerSelection = prompt("Rock, Paper, or Scissors?");
  const playerChoice = playerSelection.toUpperCase();
  const computerSelection = getComputerChoice();

  if (playerSelection !== 'rock'||'paper'|| 'scissors') {
    alert("Please choose Rock, Paper, or Scissors.");
  }
  
  function getComputerChoice() {
     const choices = ["ROCK", "PAPER", "SCISSORS"];
     const randomIndex = Math.floor(Math.random() * 3);
     return choices[randomIndex];
  }

  function playRound(playerSelection, computerSelection) {
     console.log(`Computer chose: ${computerSelection}`);

     if (playerSelection === computerSelection) {
        return "It's a tie!";
     }

     if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
     ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
     }

     return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  console.log(playRound(playerChoice, computerSelection));

