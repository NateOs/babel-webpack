//Constructor Function
class Hangman {
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = ['c']
        this.status = 'Playing'
    }
    get puzzle() { //converted to custom getter
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }
    getGuess() { 
        let guessLetter = 'a'

        this.guessedLetters.push(guessLetter)
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== 'Playing') {
            return
        }

        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
    }
    gameStatus() {
        const finished = this.word.every((letter) => {
            return this.guessedLetters.includes(letter) || letter === ' '
        })
    
        if (this.remainingGuesses === 0) {
            this.status = 'Failed'
        } else if (finished) {
                this.status = 'Finished'
            }
            console.log(this.status)
    }
    get statusMessage() { //convert to custom getter
        if (this.status === 'Failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else if (this.status === 'Playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'Finished') {
            return 'Great work!, you guessed the word'
        }
    }
}

export { Hangman as default }