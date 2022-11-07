var upperAndLowerAndSpecial = upperAndSpecial.concat(lowerCaseArray)
//console.log(upperAndLowerAndSpecial)
var upperAndLowerAndNumeric = upperAndNumeric.concat(lowerCaseArray)
//console.log(upperAndLowerAndNumeric)
var upperAndSpecialAndNumeric = upperAndNumeric.concat(specialCharacters)
//console.log(upperAndSpecialAndNumeric)
var allCharacters = upperAndSpecialAndNumeric.concat(lowerCaseArray)
//console.log(allCharacters)


/*let shuffledAllCharacters = allCharacters.sort(function () { //shuffles all characters
  return Math.random() -0.5;
})
console.log (shuffledAllCharacters)*/


/*var indexGenerator = []; //makes a rando list of #s based on length picked, haven't fixed that it goes up to 70 when we might not need to 
for (i=0; i<lengthPrompt; i++){
  var possibleCharacters= 
  indexGenerator.push(Math.floor(Math.random()*70));
}

indexGenerator = indexGenerator.toString();
console.log (indexGenerator); 
console.log(shuffledAllCharacters.at[indexGenerator])
*/




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