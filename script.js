/*Set the initial value for the password length.*/
document.getElementById("passwordLength").value = "16";

/* Array containing all acceptable characters. Excluded: I/i O/o S/s L/l */
var acceptableCharacters = [
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
    "Z",
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
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "!",
    "£",
    "$",
    "%",
    "&",
    "*",
    "@",
    "?",
    "#",
];

/* Main function for generating the password. */
function GeneratePassword() {
    
    /* Variable containing the user's chosen password length. */
    var passwordLength = document.getElementById("passwordLength").value;
    
    /* Creates the variable for the password. */
    var generatedPassword = "";
    
    /* For each character in the password, loops through the acceptableCharacters array and picks a random value, and adds it to the generatedPassword variable. */
    for (i = 0; i < passwordLength; i++){
        var getRandomCharacterFromAcceptableCharacterList = acceptableCharacters[Math.floor(Math.random() * acceptableCharacters.length)];
        generatedPassword += getRandomCharacterFromAcceptableCharacterList
    } 
    
    /* Displays the generated password on-screen and makes the paragraph that displays it visible. */
    document.getElementById("generatedPassword").innerHTML = generatedPassword;
    document.getElementById("generatedPassword").style.display = "inline-block";
}