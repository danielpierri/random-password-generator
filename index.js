const themeTogglerBtn = document.querySelector("#theme-toggler-btn")
const title = document.querySelector("#title")
const titleSpan = document.querySelector("#title-span")
const subtitle = document.querySelector("#subtitle")
const passwordLengthInput = document.querySelector("#password-length")
const lengthAlert = document.querySelector("#length-alert-container")
const inputLength = document.querySelector("#length-input")
const generatePasswordBtn = document.querySelector("#btn-generate")
const passwordOne = document.querySelector("#password-one")
const passwordTwo = document.querySelector("#password-two")
const passwordThree = document.querySelector("#password-three")
const passwordFour = document.querySelector("#password-four")
const passwords = document.getElementsByClassName("password")
const copiedToClipboard = document.querySelector("#copied-to-clipboard")
const characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Password Settings

let password = ""
let passwordLength

function generatePassword(length) {
  password = ""
  passwordLength = length
  for (let i = 0; i < passwordLength; i++) {
    let randomPassword = Math.floor(Math.random() * characters.length)
    password += characters.substring(randomPassword, randomPassword + 1)
  }
  return password
}

inputLength.addEventListener("keyup", (event) => {
  const { value } = event.target
  generatePassword(value)
})

generatePasswordBtn.addEventListener("click", () => {
  lengthAlert.textContent = ""
  if (passwordLength >= 8 && passwordLength <= 16) {
    passwordOne.value = generatePassword(passwordLength)
    passwordTwo.value = generatePassword(passwordLength)
    passwordThree.value = generatePassword(passwordLength)
    passwordFour.value = generatePassword(passwordLength)
    // return passwordOne.value, passwordTwo.value, passwordThree.value, passwordFour.value
  } else if (passwordLength < 8) {
    lengthAlert.textContent = "Your password length must be a number between 8-16!"
  } else if (passwordLength > 16) {
    lengthAlert.textContent = "Your password length must be a number between 8-16!"
  } else {
    lengthAlert.textContent = "Your password length must be a number between 8-16!"
  }
})

function copyPasswordToClipboard(passwordNumber) {
  const copyPassword = passwordNumber
  copyPassword.select()
  copyPassword.setSelectionRange(8, 16)
  navigator.clipboard.writeText(passwordNumber.value)
  copiedToClipboard.textContent = `Copied password to clipboard!`
  copiedToClipboard.style.color = darkTheme ? "#D1FAE5" : "#273549" 
  setTimeout(() => {
    copiedToClipboard.style.color = "transparent"
  }, 2000)
  setTimeout(() => {
    copiedToClipboard.textContent = ""
  }, 2100)
}

passwordOne.addEventListener("click", () => {
  copyPasswordToClipboard(passwordOne)
})
passwordTwo.addEventListener("click", () => {
  copyPasswordToClipboard(passwordTwo)
})
passwordThree.addEventListener("click", () => {
  copyPasswordToClipboard(passwordThree)
})
passwordFour.addEventListener("click", () => {
  copyPasswordToClipboard(passwordFour)
})


// Dark Theme Settings

let darkTheme = false

themeTogglerBtn.innerHTML = `<img class="moon" src="img/moon-empty.png"/>`

function toggleTheme() {
  if (darkTheme === false) {
    themeTogglerBtn.classList.add("btn-toggle-theme--dark")
    document.body.classList.add("body--dark")
    title.classList.add("title--dark")
    titleSpan.classList.add("title__accent--dark")
    subtitle.classList.add("subtitle--dark")
    passwordLengthInput.classList.add("password-length--dark")
    inputLength.classList.add("length-input--dark")
    passwordOne.classList.add("password--dark")
    passwordTwo.classList.add("password--dark")
    passwordThree.classList.add("password--dark")
    passwordFour.classList.add("password--dark")
    copiedToClipboard.classList.add("copied-to-clipboard--dark")
    themeTogglerBtn.innerHTML = `<img class="btn-toggle-theme__img" src="img/moon-filled.png"/>`
    darkTheme = true
  } else if (darkTheme === true) {
    themeTogglerBtn.classList.remove("btn-toggle-theme--dark")
    document.body.classList.remove("body--dark")
    title.classList.remove("title--dark")
    titleSpan.classList.remove("title__accent--dark")
    subtitle.classList.remove("subtitle--dark")
    passwordLengthInput.classList.remove("password-length--dark")
    inputLength.classList.remove("length-input--dark")
    passwordOne.classList.remove("password--dark")
    passwordTwo.classList.remove("password--dark")
    passwordThree.classList.remove("password--dark")
    passwordFour.classList.remove("password--dark")
    copiedToClipboard.classList.remove("copied-to-clipboard--dark")
    themeTogglerBtn.innerHTML = `<img class="btn-toggle-theme__img" src="img/moon-empty.png"/>`
    darkTheme = false
  }
}

themeTogglerBtn.addEventListener("click", () => {
  toggleTheme()
})