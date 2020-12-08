import { url } from "./components/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { getExistingFavs } from "./components/common/storage.js";
import makeMenu from "./components/common/menu.js";
import { storeToken, userSave } from "./components/common/storage.js";
import buttonDelete from "./components/common/deleteButton.js";

makeMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}
const productDetailUrl = url + "products/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const inputId = document.querySelector("id");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");

(async function () {
    try {
        const response = await fetch(productDetailUrl);
        const details = await response.json();

        title.value = details.title;
        price.value = details.price;
        description.value = details.description;
        idInput.value = details.id;

        buttonDelete(details.id);

        console.log(details);
    } catch (error) {
        console.log(error);
    }
    finally {
        loading.style.display = "none";
        form.style.display = "block";
    }
})();

form.addEventListener("submit", submitForm);

function formSubmit(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.nodeValue.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const valueId = idInput.value;

    if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
         return displayMessage("warning", "Please add proper values", "message-container");
    }

    productUpdate(titleValue, priceValue, descriptionValue, valueId);

}

async function productUpdate(title, price, description, id) {

    const url = url +"products/" + id;
    const data = JSON.stringify({ title: title, price: price, description: description });

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json)

        if(json.updated_at) {
            displayMessage("success", "product-created", ".message-container");
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }
        
    } catch(error) {
            console.log(error)
        }
}