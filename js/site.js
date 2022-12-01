// get the string from the page.
function getString(){
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString); 
    displayString(revString);
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
    document.getElementById("message").innerHTML = `Your string reversed is: ${revString}`;

    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}