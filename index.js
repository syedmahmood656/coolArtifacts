/*function aliMam() {
    window.location.href = "homepage.html";
}


function ali() {

    var userName = ["sumer","ali"];
    var passwords = ["123","1234"];
    var userInput = document.getElementById('user_name').value;
    var passwordInput = document.getElementById('pass_word').value;


    if((userInput==userName[0])&&(passwordInput==passwords[0])) {
        aliMam();
    }else if((userInput==userName[1])&&(passwordInput==passwords[1])) {
        aliMam();

    } else {
        alert('enter correct user name and passwords ');
    }
        
    

}*/

// Function to redirect to homepage
function aliMam() {
    window.location.href = "homepage.html";
}

// Function to validate user input and redirect if credentials are correct
function ali() {
    // Define the valid usernames and passwords
    var userNames = ["Mdsumer@786", "Ali@123"];
    var passwords = ["8688622984", "9121422058"];

    // Get the user input values from the form
    var userInput = document.getElementById('user_name').value;
    var passwordInput = document.getElementById('pass_word').value;

    // Check if the input matches any username and password combination
    var isValid = false;
    for (var i = 0; i < userNames.length; i++) {
        if (userInput === userNames[i] && passwordInput === passwords[i]) {
            isValid = true;
            break;
        }
    }

    // Redirect if credentials are correct, otherwise show an alert
    if (isValid) {
        aliMam();
    } else {
        alert('Enter correct username and password');
    }
}



