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
        console.log(this.activePhrase);
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

        button.disabled = true;

        if (phrase.checkLetter(letter)) {
            phrase.showMatchedLetter(letter);
            button.classList.add('chosen');
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }

        if ( this.checkForWin() ) {
            this.gameOver(true);
        } else if (this.missed === 5) {
            this.gameOver(false);
        }
    }


    removeLife() {
        const heartImage = document.querySelectorAll('.tries img')[this.missed];
        heartImage.src = 'images/lostHeart.png';
        this.missed += 1;
    }


    checkForWin() {
        if (document.querySelectorAll('.hide').length === 0) {
            return true;
        }
        return false;
    }


    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'inherit';

        if (gameWon) {
            overlay.className = 'win';
            document.getElementById('game-over-message').textContent = 'Congratulations! You won!';
        } else {
            overlay.className = 'lose';
            document.getElementById('game-over-message').textContent = 'Drat! Better luck next time.';
        }

        this.resetGame();
    }

    resetGame() {
        // Clear the previous phrase
        document.querySelector('#phrase ul').innerHTML = '';

        // Reset keyboard buttons
        const keyButtons = document.querySelectorAll('.key');

        keyButtons.forEach(keyButton => {
            keyButton.classList.remove('chosen');
            keyButton.classList.remove('wrong');
            keyButton.disabled = false;
        });

        // Reset hearts
        const heartImages = document.querySelectorAll('.tries img');

        heartImages.forEach(heartImage => {
            heartImage.src = 'images/liveHeart.png';
        });
    }
}