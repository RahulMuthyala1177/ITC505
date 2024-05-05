// script.js

// Function to create a random solvable Lights Out game
function createLightsOutGame() {
    // Initialize game board array
    const board = [];
    const size = 5; // Size of the game board (5x5)

    // Create initial game board with all squares turned off
    for (let i = 0; i < size; i++) {
        board[i] = [];
        for (let j = 0; j < size; j++) {
            board[i][j] = false; // false indicates square is turned off
        }
    }

    // Simulate random clicks to create a solvable game
    const clicks = Math.floor(Math.random() * 10) + 1; // Random number of clicks between 1 and 10
    for (let i = 0; i < clicks; i++) {
        const x = Math.floor(Math.random() * size);
        const y = Math.floor(Math.random() * size);
        toggleSquare(board, x, y);
    }

    // Render game board
    renderBoard(board);
}

// Function to toggle square state
function toggleSquare(board, x, y) {
    const size = board.length;
    board[x][y] = !board[x][y]; // Toggle state of clicked square
    // Toggle neighboring squares
    if (x > 0) board[x - 1][y] = !board[x - 1][y]; // Toggle top square
    if (x < size - 1) board[x + 1][y] = !board[x + 1][y]; // Toggle bottom square
    if (y > 0) board[x][y - 1] = !board[x][y - 1]; // Toggle left square
    if (y < size - 1) board[x][y + 1] = !board[x][y + 1]; // Toggle right square
}

// Function to check if the game is solved
function isGameSolved(board) {
    return board.every(row => row.every(square => !square));
}

// Function to render game board
function renderBoard(board) {
    const boardContainer = document.getElementById('board');
    boardContainer.innerHTML = ''; // Clear previous board

    // Loop through each row and column to create squares
    board.forEach((row, rowIndex) => {
        row.forEach((square, columnIndex) => {
            const squareElement = document.createElement('div');
            squareElement.classList.add('square');
            if (square) {
                squareElement.classList.add('is-off');
            }
            // Add click event listener to each square
            squareElement.addEventListener('click', () => {
                toggleSquare(board, rowIndex, columnIndex);
                renderBoard(board);
                if (isGameSolved(board)) {
                    displayWinMessage();
                }
            });
            boardContainer.appendChild(squareElement);
        });
    });
}

// Function to display winning message
function displayWinMessage() {
    window.alert("You win!");
}

// Initialize game
function initializeGame() {
    createLightsOutGame();
}

// Call initializeGame when the page loads
window.addEventListener('load', initializeGame);
