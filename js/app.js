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
});


document.addEventListener('keyup', (e) => {
    const matchExp = /^[a-z]$/i;

    if ( matchExp.test(e.key) ) {
        const button = getButtonByLetter(e.key);
        game.handleInteraction(button);
    }
});


/**
 * Returns the key button which matches an alpha key
 * @param   {string}    letter - the letter to match
 * @returns {Node}      Key button
 */
function getButtonByLetter(letter) {
    const keyButtons = document.querySelectorAll('.key');
    
    for (let button of keyButtons) {
        if (button.textContent === letter.toLowerCase()) {
            return button;
        }
    }
}