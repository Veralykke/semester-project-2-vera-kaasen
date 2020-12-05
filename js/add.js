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
            Authorization: `# ${token}`//?????????????????????????????
        },
    };

    try {
        const respone =  await fetch(url, options);
        const json = await response.json();

        console.log(json);
    }
    catch (error) {
        console.log(error)
    }
}