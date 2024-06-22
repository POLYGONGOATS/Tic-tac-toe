const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

let currentPlayer = 'X';
let gameState = Array(9).fill(null);

const winningConditions = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (gameState[index] || checkWinner()) {
        return;
    }

    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner()) {
        showMessage(`Player ${currentPlayer} wins!`);
        setTimeout(restartGame, 2000);
    } else if (gameState.every(cell => cell)) {
        showMessage(`It's a tie!`);
        setTimeout(restartGame, 2000);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    return winningConditions.some(condition => {
        return condition.every(index => gameState[index] === currentPlayer);
    });
}

function showMessage(msg) {
    message.textContent = msg;
    message.classList.remove('hidden');
    message.classList.add('visible');
}

function restartGame() {
    currentPlayer = 'X';
    gameState = Array(9).fill(null);
    cells.forEach(cell => {
        cell.textContent = '';
    });
    message.classList.remove('visible');
    message.classList.add('hidden');
}

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});


