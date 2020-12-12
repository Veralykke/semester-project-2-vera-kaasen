import {hamburgerMenu} from "./hamburger.js";
import {url} from "./components/api.js";
import { searchProducts } from "./components/common/searchProducts.js";
import makeMenu from "././components/common/menu.js";

/*Adding HTML(json) function here*/
makeMenu(); 

const renderProductsUrl = url + "products";

(async function() {

    try {
        const response = await fetch(renderProductsUrl);
        const json = await response.json();
        HTML(json);
        searchProducts(json);
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
        <div id="product-${product.id}" class="product"
            data-title = "${product.title}" 
            data-price = "${product.price}"
            data-image = "${product.image_url}">

            <h4>${product.title}</h4>
            <p>Price: ${product.price}$</p>
            <img class="product-images" src="${product.image_url}" alt="product-images">
            <a href="detail.html?id=${product.id}"> <button class="button-more" data-id="${product.id}">More</button></a>
        </div>`;
    });

}

































