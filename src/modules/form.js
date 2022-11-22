import generatePassword from "./passwordGenerator";

const generatedPassword = document.querySelector('.generatedPassword')
const length = document.querySelector('.length')
const lowerCaseLettersCheckbox = document.querySelector('.lowerCaseLettersCheckbox')
const upperCaseLettersCheckbox = document.querySelector('.upperCaseLettersCheckbox')
const numbersCheckbox = document.querySelector('.numbersCheckbox')
const symbolsCheckbox = document.querySelector('.symbolsCheckbox')
const generatePasswordButton = document.querySelector('.generatePasswordButton')

function callGeneratePassword() {
    if (length.value > 20) {
        length.value = "20"
        alert('The maximum length allowed is 20 characters.')
    }

    const generatedPassword = generatePassword(
        length.value, 
        lowerCaseLettersCheckbox.checked,
        upperCaseLettersCheckbox.checked,
        numbersCheckbox.checked, 
        symbolsCheckbox.checked
    )

    return generatedPassword || "Please try again."
}

export default () => {
    generatePasswordButton.addEventListener('click', () => {
        generatedPassword.innerHTML = callGeneratePassword()
    })
};