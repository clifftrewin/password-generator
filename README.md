# Password Generator
Generates random passwords based on selected criteria

## Decription

The Password Generator generates a random password with a length given by the user
and using character sets selected by the user.

## Installation

N/A

## Usage

The user presses a generate password button. The user is then prompted to enter a password
length of at least 8 and upto 128 with a default of 12. If a non-numeric character is entered
or a number less than 8 or greater than 128 then an alert appears and the process is stopped.

The user is then prompted successively whether to permit lower case characters, numeric 
characters, upper case characters and special characters. If no character set is allowed
an alert appears and the process is stopped.

If the length and permitted character sets are accepted then a password is generated with
a high to low probability of the character type being given by the order of lower case, 
numeric, upper case and special. If chosen lower case will be the commonest type and special
characters will be the rarest. Witin character sets all characters are equally probable.

## Credits

N/A

## Deployed

[Password Generator](https://clifftrewin.github.io/password-generator)

## License

