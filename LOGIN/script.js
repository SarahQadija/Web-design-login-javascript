

function login() {
    let password = document.getElementById('password').value;

    if (password.length < 12) {
        alert('your password need to be atleast 12 character');
    }
    else {
        alert('OK');
    }

    var upperCaseLetters = /[A-Z]/g;
    if (password.match(upperCaseLetters)) {
        alert('OK');
    }
    else {
        alert('your password need to be in uppercase letter');
        
    }

    var lowerCaseLetters = /[a-z]/g;
    if (password.match(lowerCaseLetters)) {
        alert('OK');
    }
    else {
        alert('your password need to be in lowercase letter');
        
    }

    var numbers = /[0-9]/g;
    if (password.match(numbers)) {
        alert('OK');
    }
    else {
        alert('your password need to be in at least a number');
        
    }

    var symbols = /[@, $, !, &,]/g;
    if (password.match(symbols)) {
        alert('OK');
    }
    else {
        alert('your password need to be in at least a symbol');
        
    }

}