// Create a var for the generate id
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Generate the password
  let password = generatePassword();

  // Write the password to the password field
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generate the password
function generatePassword() {
  // Get the password length
  let passwordLength = getPasswordLength();

  // Get character types
  let chars = getCharTypes();

  console.log(chars)

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let r = Math.floor(Math.random() * chars.length)
    password += chars[r];
  }

  return password;
}

function getPasswordLength() {
  // Prompt the user to enter a password length
  let passwordLength = prompt("Enter password length. (Must be a positive integer between 8 and 128)");

  // Validate that the length is a number
  if (isNaN(passwordLength)) {
    return getPasswordLength();
  }

  // Validate that the range is between 8 and 128
  if ((passwordLength < 8) || (passwordLength > 128)) {
    return getPasswordLength();
  }
  
  return passwordLength;
}

var charTypes = ["lowercase", "uppercase", "numeric", "special"];

function getCharTypes() {
  let chars = "";
  for (let i = 0; i < charTypes.length; i++) {
    let charType = charTypes[i];
    let yn = allowPrompt(charType);
    if (yn == "y") {
      chars += getChars(charType);
    }
  }

  // Recurse if no character types are selected
  if (chars.length == 0) {
    return getCharTypes();
  }

  return chars;
}

var alpha = "abcdefghijklmnopqrstuvwxyz";

function getChars(charType) {
  switch (charType) {
    case "lowercase":
      return alpha;
    case "uppercase":
      return alpha.toUpperCase();
    case "numeric":
      return "0123456789";
    case "special":
      return "!@#$%&*.?";
  }
}

function allowPrompt(charType) {
  let yn = prompt("Allow " + charType + " characters? (Enter Y or N)");
  yn = yn.toLowerCase();
  if ((yn != "y") && (yn != "n")) {
    return allowPrompt(charType);
  }

  return yn;
}

