/* Treehouse FSJS Techdegree
* Project 4 - OOP Game App
* app.js */

let game = null;

document.getElementById('btn__reset').addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});


document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.type === 'submit') {
        game.handleInteraction(e.target);
    }
})