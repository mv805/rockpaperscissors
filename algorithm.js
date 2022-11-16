//Create variables for rock paper and scissors
const SELECTIONS = ["rock", "paper", "scissors"];

//Create variables to keep score
let playerScore = 0;
let computerScore = 0;

//have a function randomly call one of the strings from the array
function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomChoice];
}

// function getComputerChoiceDistributionTest() {
//   const ITERATIONS = 10000;
//   const testSamples = {
//     rock: 0,
//     scissors: 0,
//     paper: 0,
//   };

//   for (let index = 0; index < ITERATIONS; index++) {
//     testSamples[getComputerChoice()]++;
//   }

//   return (results = {
//     rockDist: Math.trunc((testSamples.rock / ITERATIONS) * 100),
//     paperDist: Math.trunc((testSamples.paper / ITERATIONS) * 100),
//     scissorsDist: Math.trunc((testSamples.scissors / ITERATIONS) * 100),
//   });
// }

//have a function determining who wins the round
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie! Please choose again!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore = computerScore + 1;
    return "You lose! Paper beats rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore = computerScore + 1;
    return "You lose! Scissors beats paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore = computerScore + 1;
    return "You lose! Rock beats scissors";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore = playerScore + 1;
    return "You won! Rock beats scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore = playerScore + 1;
    return "You won! Paper beats rock";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore = playerScore + 1;
    return "Scissors beats paper";
  } else {
    return "Invalid Option, please try again";
  }
}
// Define the selections as global variables
let playerSelection = "rock";
let computerSelection = undefined;

//have a function determining who won the game
function game() {
  if (playerScore < computerScore) {
    return "You lose! Better luck next time!";
  } else if (playerScore > computerScore) {
    return "You won! Congratulations!";
  } else if (playerScore == computerScore) {
    return "It's a tie! Try again";
  }
}

//have a for loop to determine the amount of rounds
/* for (let i = 0; i < 5; i++) {
   //call function to randomly choose a computer selection for each round
    computerSelection = getComputerChoice();
  //call function to play each round
    console.log(playRound(playerSelection, computerSelection));
  }*/

//call out the function to name who won the game
//  console.log(game());

module.exports = { getComputerChoice };
