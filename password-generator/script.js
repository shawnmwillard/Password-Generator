const characters = [];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const special = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ':', ';', '<', '>', '?', '/'];

//I have a blank array characters
//If the user wants uppercase
//Then charcters will equal characters plus upper
//If the user wants lowercase
//Then characters = characters + lowercase

// function getting character type
//characters = [];
//a var includes "numbers" (for each character var created 'numbers, specials, etc.) = confirm ("Question");
//if (includes numbers) {alert ("you have chosen..."); characters = characters.concat(numbers) } else {alert "you haven't chosen..."} statement
function promptUser() {
  var promptDigits = parseInt(prompt("How many digits would you like to use?"))
  if ( promptDigits < 8 || promptDigits > 128) {
    alert("Choose a number between 8 and 128.")
    return null;
  }
  var confirmSpecial = window.confirm("Would you like to include special characters? Ex: '$,@,+,?,!'");
  var confirmCap = window.confirm("Would you like to include capital letters?");
  var confirmNum = window.confirm("Would you like to include numbers?");
  var confirmLower = window.confirm("Would you like to include lowercase letters?");
  if (!confirmSpecial && !confirmCap && !confirmNum && !confirmLower) {
    alert("Choose at least one character.")
    return null;
  }
  var choices = {
    promptDigits, confirmSpecial, confirmCap, confirmNum, confirmLower
  }
  return choices
}
// Assignment code here
function generatePassword() {
  var characters = [];
  var usersChoices = promptUser()
  console.log(usersChoices);

  if (usersChoices.confirmSpecial) {
    characters = characters.concat(special)
  }

  if (usersChoices.confirmCap) {
    characters = characters.concat(uppercase)
  }

  if (usersChoices.confirmNum) {
    characters = characters.concat(numbers)
  }

  if (usersChoices.confirmLower) {
    characters = characters.concat(lowercase)
  }
console.log(characters)

  let password = ""
  // password += characters[Math.floor(Math.random() * characters.length)]
  // password += characters[Math.floor(Math.random() * characters.length)]
  // password += characters[Math.floor(Math.random() * characters.length)]

  for (i = 0; i < usersChoices.promptDigits; i++) {
    password += characters[Math.floor(Math.random() * characters.length)]
  }
  //forloop here connected to randomizer "set length of prompt to userchoice.digits"
  // Returns a random integer from 0 to 9:
  console.log(Math.floor(Math.random() * characters.length))
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// ACCEPTANCE CRITERIA: 
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
