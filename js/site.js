// get the string from the page.
function getString(){
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    userString = cleanString(userString);
    
    let revString = reverseString(userString);

    let isPalindrome = checkForPalindrome(userString,revString);

    if(isPalindrome){
        displayString(revString);
    }
    
}

function cleanString(userString){
    
    // other ways to change strings
    // cleanString = userString.toLowerCase();
    // cleanString = cleanString.replace(' ', '');
    // cleanString = cleanString.split(' ').join('')

    userString = userString.replace(/[^a-zA-Z]/g, "").toLowerCase();

    // returns string
    return userString;
}


function checkForPalindrome(userString,revString){
    //check if the string is a palindrome
    if(userString == revString){
        return true;
    } else{
        return false;
    }
}


// reverse the string.
function reverseString(userString){

    
    let revString = "";


    // reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        
        revString += userString[index];
    }

    return revString;
}


// display the reverse string.
function displayString(revString){
    // write to the DOM
    document.getElementById("message").innerHTML = `Your string is a palindrome: ${revString}`;

    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}



