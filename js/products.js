import {url} from "./components/api.js";
import displayMessage from "./components/common/displayMessage.js";


/*Adding HTML(json) function here*/
const productsUrl = url + "products";

(async function() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        HTML(json);
    }
     catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
})();

/* Makes HTML for the Site from JSON */
function HTML(json) {
    const container = document.querySelector(".product-container");
    container.innerHTML = "";

    json.forEach(function (product) {
        container.innerHTML += `
        <a class="product" href="detail.html?id=${product.id}">
            <h4>${product.title}</h4>
            <p>Price: ${product.price}</p>
            <img class="product-images" src="http://localhost:1337${product.image.url}" alt="product-images">
        </a>`;
    });
}
