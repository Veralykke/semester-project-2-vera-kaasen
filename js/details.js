import { url } from "./components/api.js";
import displayMessage from "./components/common/displayMessage.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productDetailUrl = url + "products/" + id;

(async function () {
    try {
        const response = await fetch(productDetailUrl);
        const details = await response.json();
    
        document.title = details.name;
    
        const container = document.querySelector(".detail-container");
    
        container.innerHTML += `
                <h1>${details.title}</h1>
                <p>Price:${details.price}</p>
                <img src="http://localhost:1337${product.image.url}" alt="">`;
        console.log(details);
    }
        catch (error) {
            displayMessage("error", error, ".detail-container");
        }
})();