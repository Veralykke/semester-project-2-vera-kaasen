import {hamburgerMenu} from "./hamburger.js";
import {url} from "./components/api.js";
import { renderProducts } from "./components/common/renderProducts.js";
import { searchProducts } from "./components/common/searchProducts.js";
import { displayMessage } from "./components/common/displayMessage.js";

const productsUrl = url  + "products";


async function getProducts() {
    
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
      
        console.log(json.data);

        const products = json.data;

        renderProducts(products);
        searchProducts(products);
    }catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
}

getProducts();

/*HVORDAN ADDE BUTTON TIL DETALJPAGE?? OG PÅ HVILKEN JS SIDE?
const poroductByID = product.find.(findProduct);

function findProduct(product) {
    if(product.id === 1) {
        return true;
    }
}
/*HVORDAN ADDE BUTTON TIL DETALJPAGE??











/*NYERE API VERSjON PLUSS ADDING TO CART*/

/*Adding HTML(json) function here*/
/*const productsUrl = url + "products";

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
/*function HTML(json) {
    const container = document.querySelector(".product-container");
    container.innerHTML = "";

    json.forEach(function (product) {
        container.innerHTML += `
        <div id="product-${product.id}" class="product" 
            data-title = "${product.title}" 
            data-price = "${product.price}"
            data-image = "http://localhost:1337${product.image.url}">

            <h4>${product.title}</h4>
            <p>Price: ${product.price}</p>
            <img class="product-images" src="http://localhost:1337${product.image.url}" alt="product-images">
            <button onclick class= "add-to-cart" = "addCart(${product.id})">More</button>
        </div>`;
    });
}*/

