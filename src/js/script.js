"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM laoded");

  const main = function () {
    console.log("Init main function");

    // Choices
    const ROCK = "rock";
    const PAPER = "paper";
    const SCISSORS = "scissors";

    // DOM ELEMENTS
    const roundsElement = document.querySelector(".rounds");
    console.log(roundsElement);

    const choiceElements = [...document.querySelectorAll(".__choice")];
    const [humanChoiceElement, computerChoiceElement] = [
      choiceElements[0],
      choiceElements[1],
    ];
    console.log(choiceElements, humanChoiceElement, computerChoiceElement);

    const scoreElements = [...document.querySelectorAll(".__score")];
    const [humanScoreElement, computerScoreElement] = [
      scoreElements[0],
      scoreElements[1],
    ];
    console.log(scoreElements, humanScoreElement, computerScoreElement);

    const promptElement = document.querySelector(".prompt");
    console.log(promptElement);

    const playButtons = [...document.querySelectorAll(".__play")];
    console.log(playButtons);

    // CHOICES & WINNING CASES
    const choices = [
      { element: playButtons[0], name: "rock" },
      { element: playButtons[1], name: "paper" },
      { element: playButtons[2], name: "scissors" },
    ];
    console.log(choices);

    const winningCases = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };
    console.log(winningCases);

    // COMPUTER CHOICE
    const getComputerChoice = function () {
      const randomIndex = Math.floor(Math.random() * choices.length);
      const computerChoice = choices[randomIndex].name;
      console.log(computerChoice);
      return computerChoice;
    };
    // getComputerChoice();

    // DETERMINING WINNER
    const determineWinner = function (humanChoice, computerChoice) {
      const result =
        humanChoice === computerChoice
          ? "It's a tie!"
          : winningCases[humanChoice] === computerChoice
          ? "You win"
          : "Computer wins!";
      console.log(
        `Human choice: ${humanChoice}, ComputerChoice: ${computerChoice}, Result: ${result}`
      );
      return result;
    };
    // determineWinner("rock", "paper");
    // determineWinner("scissors", "paper");
    // determineWinner("rock", "rock");

    // UPDATING DISPLAY
    const updateDisplay = function (
      state,
      humanChoice,
      computerChoice,
      prompt
    ) {
      roundsElement.textContent = `Round: ${state.rounds}`;

      humanChoiceElement.src = `./src/img/${humanChoice}.svg`;
      humanScoreElement.textContent = state.humanScore;

      computerChoiceElement.src = `./src/img/${computerChoice}.svg`;
      computerScoreElement.textContent = state.computerScore;

      console.log("Updated display:", {
        humanChoice,
        computerChoice,
        prompt,
        state,
      });
    };
    // updateDisplay(
    //   { humanScore: 1, computerScore: 2, rounds: 3 },
    //   "rock",
    //   "rock",
    //   "It's a tie!"
    // );

    // INITIALIZE GAME
    const init = function () {
      const state = {
        humanScore: 0,
        computerScore: 0,
        rounds: 1,
      };
      console.log(state);

      // GAMEPLAY FUNCTIONALITY
      const playGame = function (humanChoice) {
        const computerChoice = getComputerChoice();
        const resultPrompt = determineWinner(humanChoice, computerChoice);

        state.humanScore += resultPrompt === "You win" ? 1 : 0;
        state.computerScore += resultPrompt === "Computer wins" ? 1 : 0;
        state.rounds += 1;

        updateDisplay(state, humanChoice, computerChoice, resultPrompt);
      };

      // playGame("rock");
      // playGame("paper");
      // playGame("scissors");
    };

    init();
  };

  main();
});
