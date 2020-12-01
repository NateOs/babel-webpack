import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleElement  = document.querySelector('#puzzle')
const guessesElement  = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = e.key
    console.log(guess)
    game1.makeGuess(guess)
    game1.gameStatus()
    render()
})

const render = () => {
    puzzleElement.innerHTML = ''
    guessesElement.textContent = game1.statusMessage

    //adding span to each letter 
    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleElement.appendChild(letterEl)
    })

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}  



document.querySelector('#reset').addEventListener('click', () => {
    startGame()
})

startGame() // this actually starts the game