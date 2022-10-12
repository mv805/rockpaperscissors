//Create variables for rock paper and scissors
const SELECTIONS = ["rock", "paper", "scissors"]
const computerSelection = getComputerChoice()

//Create variables to keep score
let playerScore = 0;
let computerScore = 0;
//have a function randomly call one of the strings from the array
function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomChoice]
}
console.log("The computer selected: ", computerSelection);

//Ask user to choose between rock, paper of scissors
const playerSelection = prompt("Please choose rock, paper, or scissors").toLowerCase();

console.log("You have selected: ", playerSelection);

  if (playerSelection == computerSelection) 
  console.log("Tie! Please choose again!");

  else if ((playerSelection == "rock") && (computerSelection == "paper")) 
    console.log("You Lose! Paper beats Rock!");

  else if ((playerSelection == "paper") && (computerSelection == "scissors"))
    console.log("You Lose! Scissors beats Paper!");

  else if ((playerSelection == "scissors") && (computerSelection == "rock")) 
    console.log("You Lose! Rock beats Scissors!");

  else if ((playerSelection == "rock") && (computerSelection == "scissors"))
    console.log("You Won! Rock beats Scissors!");

  else if ((playerSelection == "paper") && (computerSelection == "rock"))
    console.log("You Won! Paper beats Rock!");

  else if ((playerSelection == "scissors") && (computerSelection == "paper"))
    console.log("You Won! Scissors beats Paper!");

  else
    console.log("Please enter a valid responce");
  
function playRound(playerSelection, computerSelection) {

}

//function game()
