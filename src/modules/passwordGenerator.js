const symbols = '[]{}!,.;~^@#$%&*()_+-=`'

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
// setRandChar(char range from ASCII: min, max + 1)
const generateUpperCaseLetter = () => String.fromCharCode(rand(65, 91)) 
const generateLowerCaseLetter = () => String.fromCharCode(rand(97, 123))
const generateNumber = () => String.fromCharCode(rand(48, 58))
const generateSymbol = () => symbols[rand(0, symbols.length)]

export default function generatePassword(length, addLowerCaseLetters, addUpperCaseLetters, addNumbers, addSymbols) {
    length = Number(length)
    if (length > 20) length = 20
    const passwordArray = []
    
    for(let i = 0; i < length; i++) {
        addLowerCaseLetters && passwordArray.push(generateLowerCaseLetter())
        addUpperCaseLetters && passwordArray.push(generateUpperCaseLetter())
        addNumbers && passwordArray.push(generateNumber())
        addSymbols && passwordArray.push(generateSymbol())
    }

    return passwordArray.join('').slice(0, length)
}