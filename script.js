// 1. Write the logic to get computer choice
const getComputerChoice = function () {
  const elems = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * elems.length);
  return elems[choice];
};

getComputerChoice();
