// Assignment Code
var upperCaseArray= [  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCaseArray= [  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialCharacters= ["!", "@", "#", "$", "%", "^", "&", "*"]
var numericValues= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

var generateBtn = document.querySelector("#generate");

var lengthPrompt = window.prompt("How long would you like your password to be, please choose between 8 and 128 characters")
console.log(lengthPrompt + " lengthPrompt Test")
while (lengthPrompt < 8) {
  lengthPrompt = window.prompt ("Password must be at least 8 characters")
}
while (lengthPrompt > 128) {
  lengthPrompt = window.prompt ("Password can only be 128 characters")
}
//console.log(lengthPrompt+ " test reassignment of length")


var hasLowerCase = window.confirm("Would you like lower case letters?")
///console.log(hasLowerCase + " hasLowerCase test")


var hasSpecialCharacters = window.confirm("Would you like special characters?")
//console.log(hasSpecialCharacters + " hasSpecialCharacters test")

var hasNumericValues = window.confirm ("Would you like numeric values?")
//console.log (hasNumericValues + " hasNumericValues test")


var upperAndlowerArray = upperCaseArray.concat(lowerCaseArray)
//console.log(upperAndlowerArray)
var upperAndSpecial = upperCaseArray.concat(specialCharacters)
//console.log(upperAndSpecial)
var upperAndLowerAndSpecial = upperAndSpecial.concat(lowerCaseArray)
//console.log(upperAndLowerAndSpecial)
var upperAndNumeric = upperCaseArray.concat(numericValues)
//console.log(upperAndNumeric)
var upperAndLowerAndNumeric = upperAndNumeric.concat(lowerCaseArray)
//console.log(upperAndLowerAndNumeric)
var upperAndSpecialAndNumeric = upperAndNumeric.concat(specialCharacters)
//console.log(upperAndSpecialAndNumeric)
var allCharacters = upperAndSpecialAndNumeric.concat(lowerCaseArray)
//console.log(allCharacters)

let shuffledAllCharacters = allCharacters.sort(function () { //shuffles all characters
  return Math.random() -0.5;
})
console.log (shuffledAllCharacters)

var indexGenerator = []; //makes a rando list of #s based on length picked, haven't fixed that it goes up to 70 when we might not need to 
for (i=0; i<lengthPrompt; i++){
  indexGenerator.push(Math.floor(Math.random()*70));
}

indexGenerator = indexGenerator.toString();
console.log (indexGenerator); 



console.log(shuffledAllCharacters.at[indexGenerator])
/*
function generatePassword() {
  //if  (hasLowerCase && hasSpecialCharacters && hasNumericValues) {
  for (var i=0; i<indexGenerator; i++);
    var generatedPassword = shuffledAllCharacters[indexGenerator[i]];
    //var generatedPassword = indexGenerator.map( i => shuffledAllCharacters)
    console.log(generatedPassword);
  }

generatePassword (console.log("Hi"));
console.log(generatedPassword);
/*function getRandomIndex(numberArray = []){
  if (Array.isArray(numberArray)){
    var index = Math.floor(Math.random() * lengthPrompt) //*lengthPrompt
    return numberArray[index]

  }
  return null;

} */
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
