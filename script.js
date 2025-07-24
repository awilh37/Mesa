const gameTiles = document.querySelectorAll('.game-tile');
const popup = document.getElementById('game-details-popup');
const popupGameName = document.getElementById('popup-game-name');
const popupGameImage = document.getElementById('popup-game-image');
const popupGameDescription = document.getElementById('popup-game-description');
const popupGameRules = document.getElementById('popup-game-rules');
const closePopup = document.querySelector('.close-popup');
const plusButton = document.querySelector('.plus-button');

const gameData = {
    anagrams: {
        name: 'Anagrams',
        image: 'Anagrams.png',
        description: 'A word game where you unscramble letters to form a word.',
        rules: '1. Unscramble the letters to find the hidden word. 2. You have a limited time to solve each puzzle. 3. The longer the word, the more points you get.'
    },
    yahz: {
        name: 'Yahz',
        image: 'Yahz.png',
        description: 'A dice game based on the classic Yahtzee.',
        rules: '1. Roll the dice up to three times. 2. Score points by getting certain combinations. 3. The player with the highest score wins.'
    },
    battleship: {
        name: 'Battleship',
        image: 'Battleship.png',
        description: 'A strategy game where you try to sink your opponent\'s ships.',
        rules: '1. Place your ships on the grid. 2. Take turns firing at your opponent\'s grid. 3. The first player to sink all of their opponent\'s ships wins.'
    }
};

gameTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        const gameId = tile.id;
        const game = gameData[gameId];

        popupGameName.textContent = game.name;
        popupGameImage.src = game.image;
        popupGameDescription.textContent = game.description;
        popupGameRules.textContent = game.rules;

        // Placeholder for rooms and active games
        const roomList = document.getElementById('popup-room-list');
        roomList.innerHTML = `
            <li>Room 1 <button onclick="console.log('Join Room 1')">Join</button></li>
            <li>Room 2 <button onclick="console.log('Join Room 2')">Join</button></li>
        `;

        const activeGamesList = document.getElementById('popup-active-games');
        activeGamesList.innerHTML = `
            <li>Yahz - Room 3</li>
        `;

        popup.style.display = 'flex';
    });
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

plusButton.addEventListener('click', () => {
    console.log('Create a public or private room');
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
