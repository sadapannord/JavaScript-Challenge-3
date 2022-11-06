// Assignment Code
var upperCaseArray= [  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCaseArray= [  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialCharacters= ["!", "@", "#", "$", "%", "^", "&", "*"]

var generateBtn = document.querySelector("#generate");

var lengthPrompt = window.prompt("How long would you like your password to be, please choose between 8 and 128 characters")
console.log(lengthPrompt + " lengthPrompt Test")
if (lengthPrompt < 8) {
  lengthPrompt = window.prompt ("Password must be at least 8 characters")
}
if (lengthPrompt > 128) {
  lengthPrompt = window.prompt ("Password can only be 128 characters")
}
console.log(lengthPrompt+ " test reassignment of length")


var hasLowerCase = window.confirm("Would you like lower case letters?")
console.log(hasLowerCase + " hasLowerCase test")


var hasSpecialCharacters = window.confirm("Would you like special characters?")
console.log(hasSpecialCharacters + " hasSpecialCharacters test")


function getRandomIndex(numberArray = []){
  if (Array.isArray(numberArray)){
    var index = Math.floor(Math.random() * lengthPrompt) //*lengthPrompt
    return numberArray[index]

  }
  return null;

} 
/*
function generatePassword(){
  console.log("Generating password...");
}

console.log (getRandomIndex(lowerCaseArray))

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */
