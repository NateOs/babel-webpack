//async await is ideal for promise chaining, more readable and organised
const getPuzzle = async (wordCount) => { 
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

export { getPuzzle as default }
