"use strict";

// 1. Write the logic to get computer choice
const getComputerChoice = function () {
  const weapons = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * weapons.length);
  return weapons[computerChoice];
};

getComputerChoice();

// 2. Write the logic to get the human choice
const getHumanChoice = function () {
  const humanChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
  return humanChoice;
};

// 3. Declare the players score variables
let humanScore = 0,
  computerScore = 0;

// 4. Write the logic to play a single round
const playRound = function (humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  console.log(humanChoice, computerChoice);

  if (humanChoice === computerChoice) console.log(`It's a tie`);

  const winningCases = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  const result =
    humanChoice === winningCases[computerChoice]
      ? "Computer wins!"
      : "You win!";

  result === "You win!" ? humanScore++ : computerScore++;

  console.log(result, humanScore, computerScore);
};

playRound();
