"use strict";

document.addEventListener("DOMContentLoaded", function () {
  /**
   * Main function to initialize the game
   */
  const main = function () {
    // DOM ELEMENTS
    /**
     * @type {HTMLElement} Element displaying the number of rounds
     */
    const roundsElement = document.querySelector(".rounds");

    /**
     * @type {HTMLElement[]} Elements displaying the choices
     */
    const choiceElements = [...document.querySelectorAll(".__choice")];
    const [humanChoiceElement, computerChoiceElement] = [
      choiceElements[0],
      choiceElements[1],
    ];

    /**
     * @type {HTMLElement[]} Elements displaying the scores
     */
    const scoreElements = [...document.querySelectorAll(".__score")];
    const [humanScoreElement, computerScoreElement] = [
      scoreElements[0],
      scoreElements[1],
    ];

    /**
     * @type {HTMLElement} Element displaying the game prompt
     */
    const promptElement = document.querySelector(".prompt");

    /**
     * @type {HTMLElement[]} Elements for the play buttons
     */
    const playButtons = [...document.querySelectorAll(".__play")];

    /**
     * @type {HTMLElement} Element for the reset button
     */
    const resetButtonElement = document.querySelector(".reset");

    // CHOICES & WINNING CASES
    /**
     * @type {{element: HTMLElement, name: string}[]} Choices and their respective elements
     */
    const choices = [
      { element: playButtons[0], name: "rock" },
      { element: playButtons[1], name: "paper" },
      { element: playButtons[2], name: "scissors" },
    ];

    /**
     * @type {Object<string, string>} Mapping of choices to what they beat
     */
    const winningCases = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    /**
     * Get a random choice for the computer
     * @returns {string} The computer's choice
     */
    const getComputerChoice = function () {
      const randomIndex = Math.floor(Math.random() * choices.length);
      const computerChoice = choices[randomIndex].name;
      return computerChoice;
    };

    /**
     * Determine the winner based on choices
     * @param {string} humanChoice - The human's choice
     * @param {string} computerChoice - The computer's choice
     * @returns {string} Result of the game round
     */
    const determineWinner = function (humanChoice, computerChoice) {
      const result =
        humanChoice === computerChoice
          ? "It's a tie!"
          : winningCases[humanChoice] === computerChoice
          ? "You win!"
          : "Computer wins!";
      return result;
    };

    /**
     * Update the game display
     * @param {Object} state - The current game state
     * @param {string} humanChoice - The human's choice
     * @param {string} computerChoice - The computer's choice
     * @param {string} prompt - The prompt to display
     */
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

    /**
     * Set the initial display state
     * @param {Object} state - The current game state
     */
    const setInitialDisplay = function (state) {
      updateDisplay(
        state,
        "questionmark",
        "questionmark",
        "Make your choice..."
      );
    };

    /**
     * Initialize the game state and event listeners
     */
    const init = function () {
      /**
       * @type {Object} Initial game state
       * @property {number} humanScore - The human's score
       * @property {number} computerScore - The computer's score
       * @property {number} rounds - The number of rounds played
       */
      const state = {
        humanScore: 0,
        computerScore: 0,
        rounds: 1,
      };

      /**
       * Play a round of the game
       * @param {string} humanChoice - The human's choice
       */
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

      /**
       * Reset the game to its initial state
       */
      const resetGame = function () {
        state.humanScore = 0;
        state.computerScore = 0;
        state.rounds = 1;
        setInitialDisplay(state);
        choices.forEach((choice) => (choice.element.disabled = false));
      };

      /**
       * Attach event listeners to the play and reset buttons
       */
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
