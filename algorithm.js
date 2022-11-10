//Create variables for rock paper and scissors
const SELECTIONS = ["rock", "paper", "scissors"]

//Create variables to keep score
let playerScore = 0;
let computerScore = 0;

//have a function randomly call one of the strings from the array
function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomChoice]
}

//have a function determining who wins the round
function playRound(playerSelection, computerSelection) {

  if (playerSelection == computerSelection) {
    return "Tie! Please choose again!";
  }

  else if ((playerSelection == "rock") && (computerSelection == "paper")) {
    computerScore = computerScore + 1;
    return "You lose! Paper beats rock";
  }

  else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
    computerScore = computerScore + 1;
    return "You lose! Scissors beats paper";
  }

  else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
    computerScore = computerScore + 1;
    return "You lose! Rock beats scissors";
  }

  else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
    playerScore = playerScore + 1;
    return "You won! Rock beats scissors";
  }

  else if ((playerSelection == "paper") && (computerSelection == "rock")) {
    playerScore = playerScore + 1;
    return "You won! Paper beats rock";
  }

  else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
    playerScore = playerScore + 1;
    return "Scissors beats paper";
  }

  else {
    return "Invalid Option, please try again";
  }
}

let playerSelection = "rock";
let computerSelection = undefined;

//have a function determining who won the game
function game() {
  if (playerScore < computerScore) {
    return "You lose! Better luck next time!";
  }
  else if (playerScore > computerScore){
    return "You won! Congratulations!";  
  }
  else if (playerScore == computerScore){
    return "It's a tie! Try again";
  }
}

//have a for loop
  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }

  console.log(game());
