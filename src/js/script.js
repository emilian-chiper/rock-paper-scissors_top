"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const main = function () {
    // Choices
    const ROCK = "rock";
    const PAPER = "paper";
    const SCISSORS = "scissors";

    // DOM ELEMENTS
    const roundsElement = document.querySelector(".rounds");

    const choiceElements = [...document.querySelectorAll(".__choice")];
    const [humanChoiceElement, computerChoiceElement] = [
      choiceElements[0],
      choiceElements[1],
    ];

    const scoreElements = [...document.querySelectorAll(".__score")];
    const [humanScoreElement, computerScoreElement] = [
      scoreElements[0],
      scoreElements[1],
    ];

    const promptElement = document.querySelector(".prompt");

    const playButtons = [...document.querySelectorAll(".__play")];

    const resetButtonElement = document.querySelector(".reset");

    // CHOICES & WINNING CASES
    const choices = [
      { element: playButtons[0], name: "rock" },
      { element: playButtons[1], name: "paper" },
      { element: playButtons[2], name: "scissors" },
    ];

    const winningCases = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    // COMPUTER CHOICE
    const getComputerChoice = function () {
      const randomIndex = Math.floor(Math.random() * choices.length);
      const computerChoice = choices[randomIndex].name;
      return computerChoice;
    };

    // DETERMINING WINNER
    const determineWinner = function (humanChoice, computerChoice) {
      const result =
        humanChoice === computerChoice
          ? "It's a tie!"
          : winningCases[humanChoice] === computerChoice
          ? "You win!"
          : "Computer wins!";
      return result;
    };

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

      promptElement.textContent = prompt || "Make your choice ...";
    };

    // SET INITIAL DISPLAY
    const setInitialDisplay = function (state) {
      updateDisplay(
        state,
        "questionmark",
        "questionmark",
        "Make your choice..."
      );
    };

    // INITIALIZE GAME
    const init = function () {
      const state = {
        humanScore: 0,
        computerScore: 0,
        rounds: 1,
      };

      // GAMEPLAY FUNCTIONALITY
      const playGame = function (humanChoice) {
        const computerChoice = getComputerChoice();
        const resultPrompt = determineWinner(humanChoice, computerChoice);

        state.humanScore += resultPrompt === "You win!" ? 1 : 0;
        state.computerScore += resultPrompt === "Computer wins!" ? 1 : 0;
        state.rounds += 1;

        updateDisplay(state, humanChoice, computerChoice, resultPrompt);

        // Best-Of-5
        const isGameOver = state.rounds === 5;
        if (isGameOver)
          promptElement.textContent =
            state.humanScore > state.computerScore
              ? "You win the match!"
              : state.humanScore < state.computerScore
              ? "Computer wins the match!"
              : "The match is undecided";

        choices.forEach((choice) => (choice.element.disabled = isGameOver));
      };

      // RESET GAME
      const resetGame = function () {
        state.humanScore = 0;
        state.computerScore = 0;
        state.rounds = 1;
        setInitialDisplay(state);
        choices.forEach((choice) => (choice.element.disabled = false));
      };

      // EVENT LISTENERS FOR GAMEPLAY BUTTONS
      const attachEventListeners = function () {
        playButtons.forEach((btn, i) => {
          btn.addEventListener("click", function () {
            const humanChoice = choices[i].name;
            playGame(humanChoice);
          });
        });

        resetButtonElement.addEventListener("click", resetGame);
      };

      attachEventListeners();
      setInitialDisplay(state);
    };

    init();
  };

  main();
});
