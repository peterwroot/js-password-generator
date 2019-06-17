function generatePassword() {
    /* Sets the text size based on screen width and password length. */
    var passwordLength = document.getElementById("passwordLength").value;
    var newFontSize = Math.floor((window.innerWidth / passwordLength));
    document.getElementById("generatedPassword").style.fontSize = newFontSize + "pt";
    /* Sets up the lists of available characters */
    var availableChars_Numeric = "0123456789";
    var availableChars_Special = '!"£$%^&*_+=-@~#';
    var availableChars_Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var availableChars_Lowercase = "abcdefghijklmnopqrstuvwxyz";
    var availableCharacterList="";
    /* Runs through the checkboxes and determines the available characters */
    if (document.getElementById("specialCheckbox").checked === true){
        availableCharacterList = availableCharacterList.concat(availableChars_Special);
    };
    if (document.getElementById("numberCheckbox").checked === true){
        availableCharacterList = availableCharacterList.concat(availableChars_Numeric);
    };
    if (document.getElementById("uppercaseCheckbox").checked === true){
        availableCharacterList = availableCharacterList.concat(availableChars_Uppercase);
    };
    if (document.getElementById("lowercaseCheckbox").checked === true){
        availableCharacterList = availableCharacterList.concat(availableChars_Lowercase);
    };
    console.log(availableCharacterList)
    /* If the 'readable' checkbox is checked, we remove some ambiguous/hard-to-read characters from the pool */
    if (document.getElementById("readableCheckbox").checked === true){
        availableCharacterList = availableCharacterList.replace(/I|O|L|S|i|o|l|s|-|_|&|"|~|=/g, "");
    };
    /* Generates the password by picking a random character for the list x times, where x is the password length */
    var generatedPassword = "";
    for (i = 0; i < passwordLength; i++) {
        var getRandomCharacter = availableCharacterList[Math.floor(Math.random() * availableCharacterList.length)];
        generatedPassword += getRandomCharacter;
    };
    /* Only shows the generated password if the user has enabled at least one character checkbox */
    if (availableCharacterList != "") {
        document.getElementById("generatedPassword").innerHTML = generatedPassword;
    };
}
/* Copies the generated password to the user's clipboard. */
function copyToClipboard() {
    document.getElementById("toCopy").value=document.getElementById("generatedPassword").innerHTML;
    var copyText = document.getElementById("toCopy");
    copyText.select();
    document.execCommand("copy");
}