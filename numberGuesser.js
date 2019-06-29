let prompt = require("prompt-sync")();

let guessMe = Math.floor(Math.random() * 10);
let answer = -1;
let tries = 0;
let lastAnswer = -1;

while (answer != guessMe) {
  tries++;
  lastAnswer = answer;
  answer = parseInt(prompt("Guess a number: "));
  if (answer == guessMe) {
    break;
  }
  if (lastAnswer === answer) {
    tries--;
  }
  if (answer > guessMe && Number.isInteger(answer)) {
    console.log('Too High')
  } else {
    console.log('Too low');
  }
  if (!Number.isInteger(answer)) {
    tries--;
    console.log('inpunt a number');
  }
}
console.log('Number of guesses: ' + tries)