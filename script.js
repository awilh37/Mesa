const gameList = document.getElementById('game-list');
const gameDisplay = document.getElementById('game-display');

// Example game data
const games = [
    { id: 'tictactoe', name: 'Tic-Tac-Toe' },
    { id: 'rockpaperscissors', name: 'Rock Paper Scissors' }
];

function loadGameList() {
    for (const game of games) {
        const gameLink = document.createElement('a');
        gameLink.href = `#${game.id}`;
        gameLink.textContent = game.name;
        gameLink.addEventListener('click', () => loadGame(game.id));
        gameList.appendChild(gameLink);
    }
}

function loadGame(gameId) {
    // For now, just display the game ID
    gameDisplay.innerHTML = `<h2>${gameId}</h2><p>Game content will go here.</p>`;
}

loadGameList();
