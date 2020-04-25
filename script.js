// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function yourFuncForUserInput() {
  // 1. Variable to store length of password from user input

  confirmLength = parseInt((prompt("How many characters would you like your password to contain?")));

  //
  // 2. Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false

  if (confirmLength < 8 || confirmLength > 128) {
    alert("Password length must contain at least 8 characters.");
    return;
  }

  //
  // 3. Variable to store boolean regarding the inclusion of special characters

    confirmCharacter = confirm("Click OK to confirm including special characters.");

  //  
  // 4. Variable to store boolean regarding the inclusion of numeric characters

    confirmNumber = confirm("Click OK to confirm including numeric characters.");

  //
  // 5. Variable to store boolean regarding the inclusion of lowercase characters

    confirmLowercase = confirm("Click OK to confirm including lowercase characters.");

  //
  // 6. Variable to store boolean regarding the inclusion of uppercase characters

    confirmUppercase = confirm("Click OK to confirm including uppercase characters.");
  //
  // 7. Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false

  if (!confirmCharacter && !confirmNumber && !confirmLowercase && !confirmUppercase) {
    alert("You must choose a criteria!");
    return;
  }

  //
  // 8. Object to store user input

  var userInput = [];
  userInput.push(confirmLength);
  if (confirmCharacter === true) {
    userInput.push("confirmCharacter");
  }
  if (confirmNumber === true) {
    userInput.push("confirmNumber");
  }
  if (confirmLowercase === true) {
    userInput.push("confirmLowercase");
  }
  if (confirmUppercase === true) {
    userInput.push("confirmUppercase");
  }

  //
  // 9. return user-input-object

  return userInput;

}

// Function for getting a random element from an array
function yourFuncForRandomChar(arr) {
  // 1. Generate random number range from 0 to (arr.length - 1)

  var randomNum = Math.floor(Math.random() * arr.length);

  //
  // 2. Variable to store the element in arr usiong random number as index

  var randomChar = arr[randomNum];

  //
  // 3. return random elment in arr
  return randomChar;
  //
}

// Function to generate password with user input
function generatePassword() {
  //
  // DATA STRUCTURE
  //
  // 1. Varialable to store user input object by calling yourFuncForUserInput

  var userInput2 = yourFuncForUserInput();

  //
  // 2. An empty array for result to store password as it's being concatenated later

  var storePass = [];

  //
  // 3. Array to store all eligible/possible characters of different types based on by user input

  var allChar = [];

  //
  // 4. Array to contain one of each type of chosen character to ensure each will be used and guaranteed
  //

  var guaranteedCharacters = [];

  // MAIN LOGIC
  //
  // 1a. Conditional statement that adds array of special characters into array of possible characters based on user input
  // 1b. Push new random special character to guaranteedCharacters
  //

  if(userInput2.includes("confirmCharacter") === true) {
    allChar = allChar.concat(specialCharacters);
  }
  else if (!userInput2.includes("confirmCharacter")) {
    return;
  }

  // 2a. Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // 2b. Push new random special character to guaranteedCharacters
  //

  if(userInput2.includes("confirmNumber") === true) {
    allChar = allChar.concat(numericCharacters);
  }

  // 3a. Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // 3b. Push new random lower-cased character to guaranteedCharacters
  //

  if(userInput2.includes("confirmLowercase") === true) {
    allChar = allChar.concat(lowerCasedCharacters);
  }

  // 4a. Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // 4b. Push new random upper-cased character to guaranteedCharacters
  //

  if(userInput2.includes("confirmUppercase") === true) {
    allChar = allChar.concat(upperCasedCharacters);
  }

  // 5. For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  //

  for(var i = 0; i < confirmLength; i++) {
    guaranteedCharacters += yourFuncForRandomChar(allChar);
  }

  // 6. Mix in at least one of each guaranteed character in the result
  //
  // 7. Transform the result into a string and pass into writePassword and return it to the caller
  //

  var password = guaranteedCharacters;
  return password;

}

//
// Call back function to write password to the #password iuput
function writePassword() {
  // 1. Call YourFuncToGeneratePwd
  var password = generatePassword();

  // 2. Grab #password html tag
  var passwordText = document.querySelector("#password");

  // 3. Update the value of the tag
  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
