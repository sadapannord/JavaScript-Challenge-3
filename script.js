// Assignment Code
var upperCaseArray= [  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCaseArray= [  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialCharacters= ["!", "@", "#", "$", "%", "^", "&", "*"]
var numericValues= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var possibleCharacters = [];
let mustHaveCharacters = [];
let password = []

/*var generateBtn = document.querySelector("#generate");*/

var lengthPrompt = window.prompt("How long would you like your password to be, please choose between 8 and 128 characters")
console.log(lengthPrompt + " lengthPrompt Test")
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
  password.push(possibleCharacters);
  console.log(possibleCharacters)
}

/*var upperAndLowerArray = upperCaseArray.concat(lowerCaseArray);
console.log(upperAndLowerArray);*/

var hasSpecialCharacters = window.confirm("Would you like special characters?");
if (hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
  password.push(possibleCharacters);
  console.log(possibleCharacters);
}
/*var upperAndSpecial = upperCaseArray.concat(specialCharacters);
console.log(upperAndSpecial);*/


var hasNumericValues = window.confirm ("Would you like numeric values?");
if (hasNumericValues) {
  possibleCharacters = possibleCharacters.concat(numericValues);
  password.push(possibleCharacters);
  console.log(possibleCharacters);
}

//for (var i=0; i<lengthPrompt; i++){
  
var randomCharacters= []
while (randomCharacters.length<lengthPrompt){
  var r = Math.floor(Math.random()*possibleCharacters.length) + 1;
  if(randomCharacters.indexOf(r) === -1) randomCharacters.push(possibleCharacters[r]);
}
console.log (randomCharacters + " what")
function getRandomIndex () {
  for (var x=0; x< randomCharacters.length; x++) {
    console.log(possibleCharacters(randomCharacters[x]))
}
}
console.log(getRandomIndex())


function getRandomIndex(/*possibleCharacters = []*/){
  /*if (Array.isArray())*/
    var testing = (Math.floor(Math.random() * lengthPrompt))*lengthPrompt //*lengthPrompt
    console.log(testing)
    //return possibleCharacters[index]

  }

  console.log(possibleCharacters(testing))
  //return null;


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
