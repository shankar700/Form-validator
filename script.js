const form = document.forms['form'];
const userName = form.querySelector("#username");
const Email = form.querySelector("#Email");
const password = form.querySelector("#Password");
const confirmPassword = form.querySelector("#confirm-password");

// functions

// show errors
function showError(element, message) {
    const formControl = element.parentElement;
    formControl.className = "form-control error";
    const errorMsg = formControl.querySelector("small");
    errorMsg.innerText = message;
}

// show success
function showSuccess(element) {
    const formControl = element.parentElement;
    formControl.className = "form-control success";
}

// validate email
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (userName.value === "") {
        showError(userName, 'Username is required.');
    } else {
        showSuccess(userName);
    }

    if (Email.value === "") {
        showError(Email, 'email is required.');
    } else if (!validateEmail(Email.value)) {
        showError(Email, 'please provide valid email.')
    } else {
        showSuccess(Email);
    }

    if (password.value === "") {
        showError(password, 'password is required');
    } else {
        showSuccess(password);
    }

    if (confirmPassword.value === "") {
        showError(confirmPassword, 'Passwords dont match');
    } else {
        showSuccess(confirmPassword);
    }
})