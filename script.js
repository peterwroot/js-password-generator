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

/* hides the password and then runs the main password generation function. */
function animatePassword() {
    document.getElementById("generatedPassword").innerHTML="";
    document.getElementById("generatedPassword").style.opacity = 0;
    setTimeout(generatePassword,200)
}

/* Main function for generating the password. */
function generatePassword() {
        
    /* gets the status of the four option checkboxes. */
    var useSpecial = document.getElementById("specialCheckbox");
    var useNumbers = document.getElementById("numberCheckbox");
    var useUpper = document.getElementById("uppercaseCheckbox");
    var useLower = document.getElementById("lowercaseCheckbox");
    var useReadable = document.getElementById("readableCheckbox");
    
    /* for each checkbox, check if it is checked. If so, populate the array with the chosen characters. */
    /* If the box is not checked, blank out the particular array.*/
    if (useSpecial.checked === true) {
        chars_Special = [
            "!",
            '"',
            "£",
            "$",
            "%",
            "^",
            "&",
            "*",
            "(",
            ")",
            "-",
            "+",
            "=",
            "[",
            "]",
            "{",
            "}",
            "~",
            "@",
            "?",
            "#",
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
            "Z"
        ];
    } else {
        chars_Upper = [];
    }
    
    /*If the user has selected the 'readable' option, then we remove ambiguous characters*/
    if (useReadable.checked === true) {
        if (useUpper.checked === true){
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
        
        if (useLower.checked === true){
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
    }
    
    /* Concatenate the four arrays into a single array*/
    var charsToUse = chars_Special.concat(chars_Numeric).concat(chars_Upper).concat(chars_Lower);

    /* Variable containing the user's chosen password length. */
    var passwordLength = document.getElementById("passwordLength").value;
    
    /* sets the font size based on the length of the password and the width of the window*/
    /* ensures the password always fits on-screen*/
    var windowSize = window.innerWidth;
    console.log(windowSize)
    var newFontSize = Math.floor((windowSize / passwordLength) );
    console.log(newFontSize)
    document.getElementById("generatedPassword").style.fontSize = newFontSize + "pt";
    
    /* Creates the variable for the password. */
    var generatedPassword = "";
    
    /* For each character in the password, loops through the charsToUse array and picks a random value, and adds it to the generatedPassword variable. */
    for (i = 0; i < passwordLength; i++) {
        var getRandomCharacter = charsToUse[Math.floor(Math.random() * charsToUse.length)];
        generatedPassword += getRandomCharacter;
    }
    
    /* Only generates a password if at least one of the four checkboxes are checked. */
    /* Displays a warning message if the user hasn't selected at least one.*/
    if (charsToUse != "") {
        document.getElementById("generatedPassword").innerHTML = generatedPassword;
    } else {
        document.getElementById("generatedPassword").innerHTML = "Nice try."
    }

    /*Makes the generated password visible.*/
    document.getElementById("generatedPassword").style.opacity = 1;
    document.getElementById("copyButton").style.opacity = 1;
}

/* Copies the generated password to the user's clipboard. */
function copyToClipboard() {
    document.getElementById("toCopy").value=document.getElementById("generatedPassword").innerHTML;
    var copyText = document.getElementById("toCopy");
    copyText.select();
    document.execCommand("copy");
}
