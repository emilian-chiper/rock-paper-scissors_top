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

console.log(getHumanChoice());

// 3. Declare the players score variables
const humanScore = 0,
  computerScore = 0;
