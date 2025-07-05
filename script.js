"use strict";

// NOTE: creating a function that returns a rock, paper, or scissors

// NOTE: creating a function that returns a string based on the random number

const getComputerChoice = function () {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// NOTE: creating a function that returns a string based on the user's answer to the prompt

const getHumanChoice = function (choice) {
  if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else if (choice === "scissors") {
    return "scissors";
  }
};

// NOTE: creating the variables below to keep track of the score for the human and computer
let humanScore = 0;
let computerScore = 0;

// NOTE: creating a playRound function that expects humanChoice and computerChoice as arguements
const playRound = function (humanChoice, computerChoice) {
  console.log("human:", humanChoice, "computer:", computerChoice); // NOTE: printing string to show the player's choices
  if (humanChoice === computerChoice) {
    console.log("Tie!", humanScore, computerScore);
    // NOTE: possible outcomes of the game, we don't have to specify every single outcome because of our else statement
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++; // NOTE: incrementing the score for humans if they win
    console.log("human wins!", humanScore, computerScore);
  } else {
    computerScore++; // NOTE: incrementing the score for the computer if they win
    console.log("computer wins!", humanScore, computerScore);
  }
};

// NOTE: used a for loop to play the game up to 5 rounds
for (let i = 0; i < 5; i++) {
  // NOTE: re-prompting the human every round
  const answer = prompt("choose Rock, Paper, or Scissors!").toLowerCase();
  const humanSelection = getHumanChoice(answer); // NOTE: calling our getHumanChoice function with humanSelection
  const computerSelection = getComputerChoice(); // NOTE: calling our getComputerChoice function with computerSelection
  // NOTE: checks if truthy
  if (humanSelection) {
    playRound(humanSelection, computerSelection); // NOTE: only plays if valid
  }
}
