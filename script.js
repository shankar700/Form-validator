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
function validateEmail(element) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(element.value).toLowerCase())) {
        showSuccess(element);
    } else {
        showError(element, `Please check the ${getFieldName(element)} format!`)
    }
}

// confirm password
function checkRequired(inputArr) {

    inputArr.forEach(element => {
        if (element.value.trim() === "") {
            showError(element, `${getFieldName(element)}! is required`);
        } else {
            showSuccess(element);
        }
    });
}

// check length
function checkLength(element, minLength, maxLength) {
    if (element.value.length < minLength) {
        showError(element, `${getFieldName(element)} must be atleast ${minLength} characters!`)
    } else if (element.value.length > maxLength) {
        showError(element, `${getFieldName(element)} must be less than ${maxLength} characters!`)
    }
}

// check for password match
function checkPasswordMatch(password1, password2) {
    if (password1.value !== password2.value) {
        showError(password2, `Passwords do not match , Please try again!`);
        showError(password1, `Passwords do not match , Please try again!`);
    }
}




// get field name function
function getFieldName(element) {
    return element.id.charAt(0).toUpperCase() + element.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([userName, Email, password, confirmPassword]);

    checkLength(userName, 3, 15);
    checkLength(password, 6, 20);

    validateEmail(Email);

    checkPasswordMatch(password, confirmPassword);
})