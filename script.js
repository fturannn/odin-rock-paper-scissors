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

let playerCount = 0;
let computerCount = 0;

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    computerCount += 1;
    return "You lose! Paper beats Rock";
  } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    playerCount += 1;
    return "You win! Rock beats Scissors";
  } else if (playerSelection == "ROCK" && computerSelection == "ROCK") {
    return "It's a draw!";
  } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
    return "It's a draw!";
  } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    computerCount += 1;
    return "You lose! Scissors beat Paper";
  } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    playerCount += 1;
    return "You win! Paper beats Rock";
  } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    playerCount += 1;
    return "You win! Scissors beats Paper";
  } else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
    return "It's a draw!";
  } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
    computerCount += 1;
    return "You lose! Rock beats Scissors";
  }
};

const game = function () {
  while (playerCount < 5 && computerCount < 5) {
    let computer = getComputerChoice().toUpperCase();
    let player = prompt("Rock, Paper or Scissors?").toUpperCase();
    console.log(playRound(player, computer));
    console.log(`Player: ${playerCount} - Computer: ${computerCount}`);
    if (playerCount == 5) {
      console.log("You won the game! Congratulations!");
    } else if (computerCount == 5) {
      console.log("You lose the game! GG!");
    }
  }
};

game();
