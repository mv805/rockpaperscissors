//Create variables for rock paper and scissors
const SELECTIONS = ["rock", "paper", "scissors"]
const computerSelection = getComputerChoice()
//have a function randomly call one of the strings from the array
function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomChoice]
}

console.log("The computer selected: ", computerSelection);
//Ask user to choose between rock, paper of scissors
const playerSelection = prompt("Please choose rock, paper, or scissors");
let finalDecision = playerSelection.toLowerCase();

console.log("You have selected: ", finalDecision);



if (finalDecision === computerSelection) {
  console.log("Tie!");
}

else if ((finalDecision === "rock") && (computerSelection === "paper")) {
  console.log("You Lost!");
}

else if ((finalDecision === "paper") && (computerSelection === "scissors")) {
  console.log("You Lost!");
}

else if ((finalDecision === "scissors") && (computerSelection === "rock")) {
  console.log("You Lost!");
}

else if ((finalDecision === "rock") && (computerSelection === "scissors")) {
  console.log("You Won!");
}

else if ((finalDecision === "paper") && (computerSelection === "rock")) {
  console.log("You Won!");
}

else if ((finalDecision === "scissors") && (computerSelection === "paper")) {
  console.log("You Won!");
}

else
  console.log("Please enter a valid responce");
