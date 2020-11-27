import displayMessage from "./components/common/displayMessage.js";
import { url } from "./components/api.js";

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

form.addEventListener("submit", formSubmit);


function formSubmit(event) {
    event.preventDefault();

   const valueUsername = username.value.trim();
   const valuePassword = password.value.trim();

   if(valueUsername.length === 0 || valuePassword.length === 0) {
       displayMessage("warning", "add a valid value", ".message-container");
   }
}
























/*import { doLogin } from "./components/common/storage.js";

const username = document.querySelector("#username");
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
}*/










