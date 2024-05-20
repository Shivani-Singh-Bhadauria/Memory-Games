// script.js
document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        setTimeout(() => {
            if (userGuess === randomNumber) {
                message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
                message.style.color = 'green';
                guessButton.disabled = true;
            } else if (userGuess > randomNumber) {
                message.textContent = 'Too high! Try again.';
                message.style.color = 'red';
            } else {
                message.textContent = 'Too low! Try again.';
                message.style.color = 'red';
            }

            attemptsDisplay.textContent = `Attempts: ${attempts}`;
            guessInput.value = '';
            guessInput.focus();
        }, 300);
    });
});
