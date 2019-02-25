
class hangman {
    constructor(word, guessNum, guesses, status){
        this.word = word.toLowerCase().split('')
        this.guessNum = 5
        this.guessedLetters = []
        this.status = 'playing'
    }
    get puzzle(){
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            }
            else {
                puzzle += '*'

            }
        })

        return puzzle
    }
    makeGuess(guess){
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if (this.status !== 'playing') {
            return
        }
        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && isBadGuess) {
            this.guessNum--

        }
    }
    statusIs(){
        let puzzle = this.puzzle
        if (!puzzle.includes('*') && this.guessNum >= 1) {
            this.status = 'won'
        }
        if (this.guessNum <= 0) {
            this.status = "lost"
        }
    }
    get statusMessage(){
        if (this.status === 'playing') {
            return `Remaining Guesses: ${this.guessNum}`
        }
        else if (this.status === 'lost') {
            return `You lose... The answer was ${this.word.join('')}`
        }
        else if (this.status === 'won') {
            return 'YOU WON!!!!'
        }
        else {
            return "something's wrong..."
        }
    }
}

export {hangman as default}
