document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const statusMessage = document.getElementById('statusMessage');
    const restartButton = document.getElementById('restartButton');
    const movesCounter = document.getElementById('movesCounter');

    const cardsArray = [
        '🍎', '🍌', '🍒', '🍇', 
        '🍉', '🍓', '🍑', '🍍',
        '🍎', '🍌', '🍒', '🍇', 
        '🍉', '🍓', '🍑', '🍍'
    ];

    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;

    function initGame() {
        gameBoard.innerHTML = '';
        statusMessage.textContent = '';
        movesCounter.textContent = 'Moves: 0';
        flippedCards = [];
        matchedPairs = 0;
        moves = 0;

        shuffle(cardsArray);
        createBoard();
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createBoard() {
        cardsArray.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.setAttribute('data-card', card);
            cardElement.addEventListener('click', flipCard);
            gameBoard.appendChild(cardElement);
        });
    }

    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
            this.classList.add('flipped');
            this.textContent = this.getAttribute('data-card');
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                moves++;
                movesCounter.textContent = `Moves: ${moves}`;
                setTimeout(checkForMatch, 1000);
            }
        }
    }

    function checkForMatch() {
        const [firstCard, secondCard] = flippedCards;
        if (firstCard.getAttribute('data-card') === secondCard.getAttribute('data-card')) {
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            matchedPairs++;

            if (matchedPairs === cardsArray.length / 2) {
                statusMessage.textContent = 'Congratulations! You found all pairs!';
            }
        } else {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.textContent = '';
        }
        flippedCards = [];
    }

    restartButton.addEventListener('click', initGame);

    initGame();
});
