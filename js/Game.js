/* Treehouse FSJS Techdegree
* Project 4 - OOP Game App
* Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }


    startGame() {
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        document.getElementById('overlay').style.display = 'none';
    }


    createPhrases() {
        const phraseStrings = ['See ya later alligator',
                    'A penny saved is a penny earned',
                    'Dance like nobody is watching',
                    'Wish you were here',
                    'Measure twice cut once',
                    'What doesnt kill you makes you stronger'];

        return phraseStrings.map(phraseString => new Phrase(phraseString));
    }


    /**
     * Returns a random phrase from our set of phrases
     * @returns {object}   Phrase object
     */
    getRandomPhrase() {
        const rand = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[rand];
    }


    handleInteraction(button) {
        const phrase = this.activePhrase;
        const letter = button.textContent;

        if (phrase.checkLetter(letter)) {
            phrase.showMatchedLetter(letter);
            button.classList.add('chosen');
        } else {
            button.classList.add('wrong');
            // removeLife();
        }
    }


    removeLife() {

    }


    checkForWin() {

    }


    gameOver() {

    }
}