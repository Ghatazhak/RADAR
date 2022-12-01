// get the string from the page.
function getString(){
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    userString = cleanString(userString);
    
    let revString = reverseString(userString);

    let returnObj = checkForPalindrome(userString,revString);

     displayString(returnObj);
     
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

    let returnObj = {};

    if(userString == revString){
        returnObj.msg = "Well done! You entered a palindrome!";
    } else{
        returnObj.msg = "Sorry! You did not enter a palindrome!";
    }

    returnObj.reversed = revString;
    return returnObj;
}

function reverseString(userString){
 
    let revString = "";

    for (let index = userString.length - 1; index >= 0; index--) {
        
        revString += userString[index];
    }
    return revString;
}

function displayString(returnObj){
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("message").innerHTML = `Your string reveresed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}



