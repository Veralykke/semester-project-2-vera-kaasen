import { url } from "./components/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { getToken } from "./components/common/storage.js";
import makeMenu from "./components/common/menu.js";
import buttonDelete from  "./components/common/deleteButton.js";

makeMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const EditUrl = url + "products/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const featured = document.querySelector("#featured")
const idInput = document.querySelector("#id");
const image_url = document.querySelector("#image");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");

(async function () {
    try {
        const response = await fetch(EditUrl);
        const details = await response.json();

        title.value = details.title;
        price.value = details.price;
        description.value = details.description;
        featured.value = details.featured;
        idInput.value = details.id;
        image.value = details.image_url;

        buttonDelete(details.id);

        console.log(details);
    } catch (error) {
        console.log(error);
    } finally {
        loading.style.display = "none";
        form.style.display = "block";
    }
})();



form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const idValue = idInput.value;
    const featuredValue = featured.checked;
    const imageValue = image_url.value.trim();

    //console.log(details);

    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
         return displayMessage("warning", "Please add proper values", "message-container");
    }

    editProduct(titleValue, priceValue, descriptionValue, idValue, featuredValue, imageValue);

}

async function editProduct(title, price, description, id, featured, image_url) {

    const editUrl = url +"products/" + id;
    const data = JSON.stringify({ title: title, price: price, description: description, featured: featured, image_url: image_url});

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(editUrl, options);
        const json = await response.json();
        console.log(json);

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