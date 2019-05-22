/*Set the initial value for the password length. */
document.getElementById("passwordLength").value = "16";

/*Sets all the option checkboxes to be checked by default. */
document.getElementById("specialCheckbox").checked = true;
document.getElementById("numberCheckbox").checked = true;
document.getElementById("uppercaseCheckbox").checked = true;
document.getElementById("lowercaseCheckbox").checked = true;

/* Creates an empty array for each type of character - Uppercase, Lowercase, Numeric, and Special. */

var chars_Numeric = [];
var chars_Special = [];
var chars_Lower = [];
var chars_Upper = [];

/* Main function for generating the password. */
function generatePassword() {
    
    /* gets the status of the four option checkboxes. */
    var useSpecial = document.getElementById("specialCheckbox");
    var useNumbers = document.getElementById("numberCheckbox");
    var useUpper = document.getElementById("uppercaseCheckbox");
    var useLower = document.getElementById("lowercaseCheckbox");
    
    /* for each checkbox, check if it is checked. If so, populate the array with the chosen characters. */
    /* If the box is not checked, blank out the particular array.*/
    if (useSpecial.checked === true) {
        chars_Special = [
            "!",
            "£",
            "$",
            "%",
            "&",
            "*",
            "@",
            "?",
            "#"
        ];
    } else {
        chars_Special = [];
    }
    
    if (useNumbers.checked === true) {
        chars_Numeric = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
        ];
    } else {
        chars_Numeric = [];
    }
    
    if (useLower.checked === true) {
        chars_Lower = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "j",
            "k",
            "m",
            "n",
            "p",
            "q",
            "r",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z"
        ];
    } else {
        chars_Lower = [];
    }
    
    if (useUpper.checked === true) {
        chars_Upper = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "J",
            "K",
            "M",
            "N",
            "P",
            "Q",
            "R",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z"
        ];
    } else {
        chars_Upper = [];
    }
    
    /* Concatenate the four arrays into a single array*/
    var charsToUse = chars_Special.concat(chars_Numeric).concat(chars_Upper).concat(chars_Lower);
    
    /* Variable containing the user's chosen password length. */
    var passwordLength = document.getElementById("passwordLength").value;
    
    /* Creates the variable for the password. */
    var generatedPassword = "";
    
    /* For each character in the password, loops through the charsToUse array and picks a random value, and adds it to the generatedPassword variable. */
    for (i = 0; i < passwordLength; i++) {
        var getRandomCharacterFromAcceptableCharacterList = charsToUse[Math.floor(Math.random() * charsToUse.length)];
        generatedPassword += getRandomCharacterFromAcceptableCharacterList;
    }
    console.log(charsToUse)
    /* Only generates a password if at least one of the four checkboxes are checked. */
    /* Displays the generated password on-screen and makes the paragraph that displays it visible. */
    if (charsToUse != "") {
        document.getElementById("generatedPassword").innerHTML = generatedPassword;
        document.getElementById("generatedPassword").style.display = "inline-block";
    }
}

