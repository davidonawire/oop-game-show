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

     }


     createPhrases() {
        const phraseStrings = ['See ya later alligator',
                    'A penny saved is a penny earned',
                    'Dance like nobody is watching',
                    'Wish you were here',
                    'Measure twice cut once'];

        return phraseStrings.map(phraseString => new Phrase(phraseString));
     }

     getRandomPhrase() {

     }

     handleInteraction() {

     }


     removeLife() {

     }


     checkForWin() {

     }


     gameOver() {

     }
 }