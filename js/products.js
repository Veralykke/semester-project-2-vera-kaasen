import {hamburgerMenu} from "./hamburger.js";
import {url} from "./components/api.js";
import { searchProducts } from "./components/common/searchProducts.js";
import makeMenu from "././components/common/menu.js";
/*import { displayMessage } from "./components/common/displayMessage.js";*/

/* NY API VERSjON */
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
            data-image = "http://localhost:1337${product.image.url}">

            <h4>${product.title}</h4>
            <p>Price: ${product.price}$</p>
            <img class="product-images" src="http://localhost:1337${product.image.url}" alt="product-images">
            <button class="button-more" data-id="${product.id}">More</button>
        </div>`;
    });

    //select all buttons and linking them by the "click" event to the "detailpage", with help from the id. 
    const products = document.querySelectorAll(".product button"); 
    products.forEach(function(product){
        product.addEventListener("click", viewDetails);
    });
}

function viewDetails(e){ //(event)
    window.location.href = `detail.html?id=${e.target.dataset.id}`;
}































