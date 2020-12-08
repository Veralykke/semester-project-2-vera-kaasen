import { hamburgerMenu } from "../../hamburger.js";
import displayMessage from "../common/displayMessage.js";
import { url } from "../api.js";
import { storeToken, userSave } from "./storage.js";

const form = document.querySelector("#login-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();// prevent default behavior

    message.innerHTML = "";
  
    const valueUsername = username.value.trim();
    const valueEmail = email.value.trim();
    const valuePassword = password.value.trim();
  
    if(valueUsername.length === 0 || valueEmail.length === 0 || valuePassword.length === 0) {
       return displayMessage("warning", "Add a valid value", ".message-container");
    }

     doLogin(valueUsername, valueEmail, valuePassword);
 }

 async function doLogin(username, email, password) {

        const adminUrl = url + "auth/local"; 

        const data = JSON.stringify({ identifier: username, email: email, password: password});

        const options = {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const response = await fetch(adminUrl, options);
            const json = await response.json();
           
            if(json.user) {
                displayMessage("success", "Successfully logged in", ".message-container");
            tokenSave(json.jwt); //saveToken
            userSave(json.user);

            location.href = "admin.html";
        }

       if (json.error) {
            displayMessage("warning", "Add a valid value", ".message-container");
        }

        console.log(json);
     } catch (error) {
            console.log(error);
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










