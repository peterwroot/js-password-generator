function generatePassword() {
    var passwordLength = document.getElementById("passwordLength").value;
    var windowSize = window.innerWidth;
    var newFontSize = Math.floor((windowSize / passwordLength) );
    document.getElementById("generatedPassword").style.fontSize = newFontSize + "pt";
    var availableChars_Numeric = "0123456789";
    var availableChars_Special = '!"£$%^&*_+=-@~#';
    var availableChars_Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var availableChars_Lowercase = "abcdefghijklmnopqrstuvwxyz";
    var availableCharacterList="";
    if (document.getElementById("specialCheckbox").checked === true){
        availableCharacterList = availableCharacterList.concat(availableChars_Special);
    };
    if (document.getElementById("numberCheckbox") === true){
        availableCharacterList = availableCharacterList.concat(availableChars_Numeric);
    };
    if (document.getElementById("uppercaseCheckbox").checked === true){
        availableCharacterList = availableCharacterList.concat(availableChars_Uppercase);
    };
    if (document.getElementById("lowercaseCheckbox").checked === true){
        availableCharacterList = availableCharacterList.concat(availableChars_Lowercase);
    };
    if (document.getElementById("readableCheckbox").checked === true){
        availableCharacterList = availableCharacterList.replace(/I|O|L|S|i|o|l|s|-|_|&|"|~|=/g, "");
    };
    var generatedPassword = "";
    for (i = 0; i < passwordLength; i++) {
        var getRandomCharacter = availableCharacterList[Math.floor(Math.random() * availableCharacterList.length)];
        generatedPassword += getRandomCharacter;
    }
    if (availableCharacterList != "") {
        document.getElementById("generatedPassword").innerHTML = generatedPassword;
    } else {
        document.getElementById("generatedPassword").innerHTML = "Nice try."
    }
    document.getElementById("generatedPassword").style.opacity = 1;
    document.getElementById("copyButton").style.opacity = 1;
}
function copyToClipboard() {
    document.getElementById("toCopy").value=document.getElementById("generatedPassword").innerHTML;
    var copyText = document.getElementById("toCopy");
    copyText.select();
    document.execCommand("copy");
}