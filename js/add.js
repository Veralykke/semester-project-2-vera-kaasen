import displayMessage from "./components/common/displayMessage.js";
import makeMenu from "./components/common/menu.js";
import { storeToken, userSave } from "./components/common/storage.js";
import { url } from "./components/api.js";

makeMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const adminMessage = document.querySelector(".message-container");

form.addEventListener(".submit", submitForm);

function formSubmit(event) {
    event.preventDefault();

    adminMessage.innerHTML = "";

    const titleValue = title.nodeValue.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();

    if(titleValue.length === 0 || priceValue.length === 0 descriptionValue.length === 0) {
        displayMessage("warning", "Please add proper values", "message-container");
    }
}