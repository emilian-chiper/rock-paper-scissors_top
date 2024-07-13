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
    console.log(choiceElements);

    const scoreElements = [...document.querySelectorAll(".__score")];
    console.log(scoreElements);

    const promptElement = document.querySelector(".prompt");
    console.log(promptElement);

    const playButtons = [...document.querySelectorAll(".__play")];
    console.log(playButtons);
  };

  main();
});
