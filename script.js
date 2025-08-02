"use strict";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results");
const score = document.querySelector(".score");
const start = document.querySelector(".start");
const icons = document.querySelector(".icons");

// creating a function that returns a rock, paper, or scissors

// creating a function that returns a string based on the random number

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

// creating a function that returns a string based on the user's answer to the prompt

const getHumanChoice = function (choice) {
  if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else if (choice === "scissors") {
    return "scissors";
  }
};

// creating the variables below to keep track of the score for the human and computer
let humanScore = 0;
let computerScore = 0;

// creating a playRound function that expects humanChoice and computerChoice as arguements

const playRound = function (humanChoice, computerChoice) {
  console.log("human:", humanChoice, "computer:", computerChoice); // printing string to show the player's choices
  if (humanChoice === computerChoice) {
    results.textContent = `It's a Tie!`; // if its a tie
    score.textContent = `${humanScore} | ${computerScore}`; // displaying score
    console.log("Tie!", humanScore, computerScore);
    // possible outcomes of the game, we don't have to specify every single outcome because of our else statement
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++; // incrementing the score for humans if they win
    results.textContent = "Human Wins!"; // if human wins
    score.textContent = `${humanScore} | ${computerScore}`; // displaying score
    console.log("human wins!", humanScore, computerScore);
  } else {
    computerScore++; // incrementing the score for the computer if they win
    results.textContent = "Computer Wins!"; // if computer wins
    score.textContent = `${humanScore} | ${computerScore}`; // displaying score
    console.log("computer wins!", humanScore, computerScore);
  }
};

const startGame = icons.addEventListener("click", () => {
  start.classList.add("hidden");
});

let round = 0;
const maxRounds = 5;

rock.addEventListener("click", () => {
  if (round === maxRounds) {
    if (humanScore === computerScore) {
      results.textContent = "It's a tie! thanks for playing!";
    } else if (humanScore > computerScore) {
      results.textContent = "Human wins!, thanks for playing!";
    } else {
      results.textContent = "Computer wins!, thanks for playing!";
    }
  } else if (round < maxRounds) {
    playRound(getHumanChoice("rock"), getComputerChoice());
    round++;
  }
});

paper.addEventListener("click", () => {
  if (round === maxRounds) {
    if (humanScore === computerScore) {
      results.textContent = "It's a tie! thanks for playing!";
    } else if (humanScore > computerScore) {
      results.textContent = "Human wins!, thanks for playing!";
    } else {
      results.textContent = "Computer wins!, thanks for playing!";
    }
  } else if (round < maxRounds) {
    playRound(getHumanChoice("paper"), getComputerChoice());
    round++;
  }
});

scissors.addEventListener("click", () => {
  if (round === maxRounds) {
    if (humanScore === computerScore) {
      results.textContent = "It's a tie! thanks for playing!";
    } else if (humanScore > computerScore) {
      results.textContent = "Human wins!, thanks for playing!";
    } else {
      results.textContent = "Computer wins!, thanks for playing!";
    }
  } else if (round < maxRounds) {
    playRound(getHumanChoice("scissors"), getComputerChoice());
    round++;
  }
});
