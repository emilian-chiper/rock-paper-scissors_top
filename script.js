"use strict";

// Function to get the computer's choice
const getComputerChoice = function () {
  const weapons = ["rock", "paper", "scissors"]; // Array of possible choices
  const computerChoice = Math.floor(Math.random() * weapons.length); // Randomly select an index from the array
  return weapons[computerChoice]; // Return the choice at the randomly selected index
};

// Function to get the human's choice
const getHumanChoice = function () {
  const humanChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
  return humanChoice;
};

// Function to play the entire game
const playGame = function () {
  // Initialize scores
  let humanScore = 0,
    computerScore = 0,
    roundsPlayed = 0; // Counter for the number of rounds played

  // Function to play a single round
  const playRound = function () {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    // Define winning cases: each key beats the value
    const winningCases = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    // Check if the human's choice is valid
    if (!(humanChoice in winningCases)) {
      console.log("Invalid input!");
      return false;
    }

    // Check for a tie
    if (humanChoice === computerChoice) {
      console.log(
        humanChoice,
        computerChoice,
        `It's a tie!`,
        humanScore,
        computerScore
      );
      return true; // Indicate the round was played successfully
    }

    // Determine the result of the round
    const result =
      humanChoice === winningCases[computerChoice]
        ? "You win the round!"
        : "Computer wins the round!";

    // Update scores based on the result
    result === "You win the round!" ? humanScore++ : computerScore++;

    console.table(
      humanChoice,
      computerChoice,
      result,
      humanScore,
      computerScore
    );

    return true; // Indicate the round was played successfully
  };

  // Loop to play 5 valid rounds
  while (roundsPlayed < 5) {
    if (playRound()) roundsPlayed++; // Increment roundsPlayed only if a valid round was played
  }

  // Determine and log the final result of the game
  const finalResult =
    humanScore > computerScore
      ? "You win the game!"
      : computerScore > humanScore
      ? "Computer wins the game!"
      : "The game is a tie!";
  console.log(finalResult);
};

playGame();
