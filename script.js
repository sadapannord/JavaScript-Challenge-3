// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

 
  var lengthPrompt = window.prompt("How long would you like your password to be, please choose between 8 and 128 characters")
  //console.log(lengthPrompt + " lengthPrompt Test")
  while (lengthPrompt < 8) {
    lengthPrompt = window.prompt ("Password must be at least 8 characters")
  }
  while (lengthPrompt > 128) {
    lengthPrompt = window.prompt ("Password can only be 128 characters")
  }
  //console.log(lengthPrompt+ " test reassignment of length")
  
  var hasLowerCase = window.confirm("Would you like lower case letters?");
  if(hasLowerCase){
    possibleCharacters = upperCaseArray.concat(lowerCaseArray);
    password.push(possibleCharacters);}
    else{
     possibleCharacters = upperCaseArray;}
     
    console.log(possibleCharacters)
  
  var hasSpecialCharacters = window.confirm("Would you like special characters?");
  if (hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    password.push(possibleCharacters);
    }
    console.log(possibleCharacters)

  var hasNumericValues = window.confirm ("Would you like numeric values?");
  if (hasNumericValues) {
    possibleCharacters = possibleCharacters.concat(numericValues);
    password.push(possibleCharacters);
    }
    console.log(possibleCharacters)

  var randomCharacters= []
  while (randomCharacters.length<lengthPrompt){
    var r = Math.floor(Math.random()*possibleCharacters.length) + 1;
    console.log(r)
    if(randomCharacters.indexOf(r) === -1) randomCharacters.push(possibleCharacters[r]);
  }
  console.log (randomCharacters)
  
  passwordText.textContent= randomCharacters.join("");
}

// Add event listener to generate button (this makes things happen when you click "generate password")
generateBtn.addEventListener("click", writePassword);
//The preceding code was given!!!!!



// Assignment Code
var upperCaseArray= [  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCaseArray= [  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialCharacters= ["!", "@", "#", "$", "%", "^", "&", "*"]
var numericValues= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var possibleCharacters = [];
let mustHaveCharacters = [];
let password = []

