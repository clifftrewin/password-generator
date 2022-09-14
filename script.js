// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var numericChars = '0123456789';
  var upperCChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCChars = 'abcdefghijklmnopqrstuvwxyz';
  var specialChars = '!#$%&-?@_~';
  var includeLower = true;
  var includeNumeric = true;
  var includeUpper = true;
  var includeSpecial = true;
   var passwordLength = 0;
   var passwordLengthStr = '';
   passwordLengthStr = prompt('Enter a password length\n'+'At Least 8 characters and less than 125','12');
   if (isNaN (passwordLengthStr)) {
     alert('Entered Password Length is not a number');
     return '';
   } else {
      passwordLength = parseInt(passwordLengthStr);
        if (passwordLength < 8 || passwordLength > 124) {
          alert('Entered Password Length is not between 7 and 125');
          return '';
        }
   }
   includeLower = confirm ('Lower Case characters can be used in password')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
