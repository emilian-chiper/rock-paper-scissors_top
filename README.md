# ROCK-PAPER-SCISSORS GAME

This is a simple Rock-Paper-Scissors game implemented in JavaScript. The game is played against the computer, and the winner is determined after 5 rounds. The project is part of the Foundations track of The Odin Project.

## Game Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

## How to Play

1. Choose your move by clicking on one of the buttons: Rock, Paper, or Scissors.
2. The computer will randomly choose its move.
3. The result of the round will be displayed.
4. The game will continue until 5 rounds are completed.
5. The player with the higher score after 5 rounds wins the match. If the scores are tied, the match is undecided.

## Files

- `index.html`: The HTML structure of the game.
- `styles.css`: The CSS styling for the game.
- `script.js`: The JavaScript code for the game logic.

## Documentation

The game logic is implemented in `script.js`. Here are the details of the functions used:

### main

The main function that initializes the game

### getComputerChoice

```javascript
const getComputerChoice = function () {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex].name;
  return computerChoice;
};
```

Returns a random choice for the computer.

### determineWinner

```javascript
const determineWinner = function (humanChoice, computerChoice) {
  const result =
    humanChoice === computerChoice
      ? "It's a tie!"
      : winningCases[humanChoice] === computerChoice
      ? "You win!"
      : "Computer wins!";
  return result;
};
```

Determines the winner of a round based on the human's and computer's choices.

### updateDisplay

```javascript
const updateDisplay = function (state, humanChoice, computerChoice, prompt) {
  roundsElement.textContent = `Round: ${state.rounds}`;

  humanChoiceElement.src = `./src/img/${humanChoice}.svg`;
  humanScoreElement.textContent = state.humanScore;

  computerChoiceElement.src = `./src/img/${computerChoice}.svg`;
  computerScoreElement.textContent = state.computerScore;

  promptElement.textContent = prompt || "Make your choice ...";
};
```

Updates the game display with the current state, choices, and prompt.

### setInitialDisplay

```javascript
const setInitialDisplay = function (state) {
  updateDisplay(state, "questionmark", "questionmark", "Make your choice...");
};
```

Sets the initial display of the game.

### init

Initializes the game state and attaches event listeners.

### playGame

```javascript
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
```

Plays a round of the game and updates the state and display accordingly.

### resetGame

```javascript
const resetGame = function () {
  state.humanScore = 0;
  state.computerScore = 0;
  state.rounds = 1;
  setInitialDisplay(state);
  choices.forEach((choice) => (choice.element.disabled = false));
};
```

Resets the game to its initial state.

### attachEventListeners

```javascript
const attachEventListeners = function () {
  playButtons.forEach((btn, i) => {
    btn.addEventListener("click", function () {
      const humanChoice = choices[i].name;
      playGame(humanChoice);
    });
  });

  resetButtonElement.addEventListener("click", resetGame);
};
```

Attaches event listeners to the play and reset buttons.

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

© 2024 Emilian Chiper

## Acknowledgements

- Question SVG Vector by [zest][MIT License][svgrepo.com](https://www.svgrepo.com/svg/510152/question)
- Rock SVG Vector by [game-icons.net][CC Attribution License][svgrepo.com](https://www.svgrepo.com/svg/323925/rock)
- Paper SVG Vector by [game-icons.net][CC Attribution License][svgrepo.com](https://www.svgrepo.com/svg/323911/paper)
- Scissors SVG Vector by [game-icons.net][CC Attribution License](https://www.svgrepo.com/svg/323929/scissors)
- Reset SVG Vector by [Carbon Design][Apache License][svgrepo.com]
