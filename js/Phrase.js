/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


    addPhraseToDisplay() {
        const phraseUL = document.querySelector('#phrase ul');
        const phraseLetters = Array.from(this.phrase);

        for (let letter of phraseLetters) {
            let li = document.createElement('li');

            if (letter === ' ') {
                li.classList.add('space');
            } else {
                li.classList.add('hide', 'letter', letter);
            }

            li.textContent = letter;
            phraseUL.appendChild(li);
        }
    }


    checkLetter(letter) {
        return this.phrase.includes(letter);
    }


    showMatchedLetter(letter) {
        const matchedLetters = document.querySelectorAll(`.letter.${letter}`);
        
        matchedLetters.forEach(li => {
            li.classList.remove('hide');
            li.classList.add('show');
        });
    }
}