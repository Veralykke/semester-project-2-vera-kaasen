import displayMessage from "./components/common/displayMessage.js";
import makeMenu from "./components/common/menu.js";
import { getToken } from "././components/common/storage.js";
import { url } from "./components/api.js";

makeMenu();

const form = document.querySelector("#admin-form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image_url = document.querySelector("#image_url");
const featured = document.querySelector("#featured");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = image_url.value.trim();
    const featuredValue = featured.checked;
    console.log("priceValue", priceValue);

    if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
         return displayMessage("warning", "Please add proper values", "message-container");
    }

    addProduct(titleValue, priceValue, descriptionValue, imageValue, featuredValue);
}

async function addProduct(title, price, description, image_url, featured) {

    const addUrl = url + "products";

    const data = JSON.stringify({ title: title, price: price, description: description, image_url: image_url, featured: featured });

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response =  await fetch(addUrl, options);
        const json = await response.json();

        if (json.created_at) {
            displayMessage("success", "Product created", ".message-container");
            form.reset();
        }

        if(json.error) {
            displayMessage("error", json.message, ".message-container");
        }

        console.log(json);
    } catch (error) {
        console.log(error)
        displayMessage("error", "Something wrong happened", ".message-container");
    }
}