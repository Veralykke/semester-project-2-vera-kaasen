/*const username = document.querySelector("#username");
const usernameError = document.querySelector(".usernameError");

const password = document.querySelector("#password");
const passwordError = document.querySelector(".passwordError");

const form = document.querySelector(".modal-content");
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();

    if(validateForm()) {
        window.location.href = "admin.html";
    }
}

export default function validateForm() {
    let errors = 0;

    if(username.value.trim().length > 0 ) {
        usernameError.style.display = "none";
    } else {
        usernameError.style.display = "block";
        errors++;
    }

    if(password.value.trim().length > 0 ) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
        errors++;
    }
    console.log(errors);

    if(errors > 0) {
        return false;
    } else {
        return true;
    }
}
*/









