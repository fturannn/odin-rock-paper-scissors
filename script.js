"use strict";

const getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber == 1) {
    return "Rock";
  } else if (randomNumber == 2) {
    return "Paper";
  } else if (randomNumber == 3) {
    return "Scissors";
  }
};

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection == "ROCK" && computerSelection == "ROCK") {
    return "It's a draw!";
  } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
    return "It's a draw!";
  } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    return "You lose! Scissors beat Paper";
  } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    return "You win! Paper beats Rock";
  } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    return "You win! Scissors beats Paper";
  } else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
    return "It's a draw!";
  } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
    return "You lose! Rock beats Scissors";
  }
};
