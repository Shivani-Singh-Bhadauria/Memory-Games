document.addEventListener('DOMContentLoaded', () => {
    const memoryGameButton = document.getElementById('memoryGameButton');
    const guessNumberButton = document.getElementById('guessNumberButton');

    memoryGameButton.addEventListener('click', () => {
        window.location.href = '/Guess The Number/index.html'; // Link to the Memory Card Game HTML file
    });

    guessNumberButton.addEventListener('click', () => {
        window.location.href = '/Memory-Card-Game(Solo)/index.html'; // Link to the Guess the Number HTML file
    });
});
