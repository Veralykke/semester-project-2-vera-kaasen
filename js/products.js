
import {url} from "./components/api.js";
import displayMessage from "./components/common/displayMessage.js";

const productsUrl = url + "products";

async function() {
    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        container.innerHTML = "";

        json.forEach(function (product) {
            container.innerHTML += `<a class="product" href=detail.html?id=${product.id}">
                                    <h4>${product.title}</h4>
                                    <p>Price: ${product.price}</p>
                                </a>`;
        });

    }
     catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }

})();

