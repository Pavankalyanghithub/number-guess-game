// Get elements from the DOM
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');
const restartBtn = document.getElementById('restartBtn');

// Variables for game
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Function to check the guess
function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100!";
    return;
  }

  attempts++;
  attemptsElement.textContent = attempts;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed it in ${attempts} tries.`;
    message.style.color = "green";
    guessBtn.style.display = "none";
    restartBtn.style.display = "block";
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low! Try again.";
    message.style.color = "red";
  } else {
    message.textContent = "Too high! Try again.";
    message.style.color = "red";
  }

  guessInput.value = ''; // Clear the input field
}

// Function to restart the game
function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsElement.textContent = attempts;
  message.textContent = '';
  guessInput.value = '';
  guessBtn.style.display = "block";
  restartBtn.style.display = "none";
}

// Event listeners
guessBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', restartGame);

