import displayMessage from "./components/common/displayMessage.js";
import makeMenu from "./components/common/menu.js";
import { storeToken, userSave } from "./components/common/storage.js";
import { url } from "./components/api.js";

makeMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");

form.addEventListener(".submit", submitForm);

function formSubmit(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.nodeValue.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();

    console.log("priceValue", priceValue);

    if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
         return displayMessage("warning", "Please add proper values", "message-container");
    }

    addProduct(titleValue, priceValue, descriptionValue);
}

async function addProduct(title, price, description) {

    const url = url + "products";

    const data = JSON.stringify({ title: title, price: price, description: description });

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`//???????
        },
    };

    try {
        const respone =  await fetch(url, options);
        const json = await response.json();

        if (json.created_at) {
            displayMessage("success", "Product created", ".message-container");
            form.reset();
        }


        if(json.error) {
            displayMessage("error", json.message, ".message-container");
        }

        console.log(json);
    }
    catch (error) {
        console.log(error)
        displayMessage("error", "Something wrong happened", ".message-container");
    }
}