// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  
  passwordText.value = password;

}

// Generate Password Function returns completed password string
function generatePassword () {
  // Function Random Integer returns random integer from 1 to largestValue
  function randomInteger (largestValue) {
  return   Math.ceil(Math.random() * largestValue);
  }
  var numericChars = '0123456789e';
  var upperCChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZe';
  var lowerCChars = 'abcdefghijklmnopqrstuvwxyze';
  var specialChars = '!#$%&@_~e';
  const chosenChars = [];
  const includeC = [true, true, true, true];
   var passwordLength = 0;
   var passwordLengthStr = '';
   var passwordStr = '';
   // Ask for desired length of password and then test validity of input
   passwordLengthStr = prompt('Enter a password length\n'+'Of at Least 8 characters and at most 128','12');
   if (isNaN (passwordLengthStr)) {
     alert('Entered Password length is not a number');
     return '';
   } else {
      passwordLength = parseInt(passwordLengthStr);
        if (passwordLength < 8 || passwordLength > 128) {
          alert('Entered Password Length is either less than 8 or more than 128');
          return '';
        }
   }

   // Confirm the character sets to be used in passwords
   includeC[0] = confirm ('Lower Case characters can be used in password\n'+
   'Press cancel to not include lower case letters');
   includeC[1] = confirm ('Numeric characters can be used in password\n'+
   'Press cancel to not include numeric characters');
   includeC[2] = confirm ('Upper case characters can be used in password\n'+
   'Press cancel to not include upper case characters');
   includeC[3] = confirm ('Special characters can be used in password\n'+
   'Press cancel to not include special characters');
   // Error message if no character sets chosen
   if (!includeC[0] && !includeC[1] && !includeC[2] && !includeC[3]) {
       alert('No character types have been chosen for use in password');
       return '';
   } 
   // chosenChars is an array of chosen character sets
   // 1 represents lower case, 2 represents numeric, 3 represents upper case,
   // 4 represents special characters   length of array is equal to number of chosen sets
   j = 0;
   for (let i = 0; i < 4; i++) {
         if (includeC[i]) {
           chosenChars[j] = i;
           j = j + 1;
         }
        }
   // Each iteration of Loop adds one password character until password length is reached
    for (let i = 0; i < passwordLength; i++)  {
      // Random digit from 1 to length based of number of character sets chosen
      if (chosenChars.length === 4) {
         digitSelect = randomInteger (9);     
      } else if (chosenChars.length === 3){ 
         digitSelect = randomInteger (8);
        } else if (chosenChars.length === 2) { 
          digitSelect = randomInteger (6);
        } else {
          digitSelect = 1;
         }
         // end of if statement
      
      // Random digit from 1 to 4 selects first chosen character set
      // Random digit 5 or 6 selects second chosen character set
      // Random digit 7 or 8 selects third chosen character set
      // Random digits 9 selects fourth chosen character set
    if (digitSelect < 5) {
      selectCType = chosenChars[0];
    } else if (digitSelect < 7) {
        selectCType = chosenChars[1];
      } else if(digitSelect < 9)  {
        selectCType = chosenChars[2];  
      } else {
        selectCType = chosenChars[3];
      }
    // end of if statement
   
   // Randomly selected character set has random character chosen
   // Random character is added to password string
if (selectCType === 0) {
   digitSelect = randomInteger(26);
   passwordStr = passwordStr + lowerCChars.slice(digitSelect-1,digitSelect);
} else if (selectCType === 1) {
    digitSelect = randomInteger(10);
    passwordStr = passwordStr + numericChars.slice(digitSelect-1,digitSelect);
  } else if (selectCType === 2) {
    digitSelect = randomInteger(26);
    passwordStr = passwordStr + upperCChars.slice(digitSelect-1,digitSelect);
  } else {
    digitSelect = randomInteger(8); 
    passwordStr = passwordStr + specialChars.slice(digitSelect-1,digitSelect);
  }
  // end of  if statement

}
// End of loop
return passwordStr;
   }

 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);