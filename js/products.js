import {hamburgerMenu} from "./hamburger.js";
import {url} from "./components/api.js";
import { searchProducts } from "./components/common/searchProducts.js";
/*import { renderProducts } from "./components/common/renderProducts.js";

import { displayMessage } from "./components/common/displayMessage.js";*/


/*NY API VERSjON PLUSS ADDING TO CART*/
/*Adding HTML(json) function here*/

const search = document.querySelector(".search-box");

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
            <button class="add-to-cart" data-id="${product.id}">More</button>
        </div>`;
    });

    const products = document.querySelectorAll(".product button");
    products.forEach(function(product){
        product.addEventListener("click", viewDetails);
    });
}

function viewDetails(e){
    window.location.href = `detail.html?id=${e.target.dataset.id}`;
}

/*
const productContainer = document.querySelector(".product-container");

function renderProducts()  {

    productContainer.innerHTML = "";

    renderProductsUrl.forEach(function (product) {
        ProductContainer.innerHTML += 

        container.innerHTML += `
        <div id="product-${product.id}" class="product" 
            data-title = "${product.title}" 
            data-price = "${product.price}"
            data-image = "http://localhost:1337${product.image.url}">

            <h4>${product.title}</h4>
            <p>Price: ${product.price}</p>
            <img class="product-images" src="http://localhost:1337${product.image.url}" alt="product-images">
            <button onclick href= details.html class= "add-to-cart" = "addCart(${product.id})">More</button>
        </div>`;
        
    });
}


renderProducts();


search.onkeyup = function () {
    //console.log(event);

    const searchProduct = event.target.value.trim().toLowerCase();

    const filteredProducts = renderProductsUrl.filter(function(product) {
        if(product.full_name.toLowerCase().startsWith(searchProduct)) {
            return true;
        }
    })

    console.log(filteredProducts);

    renderProducts();
};*/





























/*ANNA VERSJON---SE PÅ*/

/*
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

/*BUTTON TIL DETAilpage---FIX
const poroductByID = product.find.(findProduct);

function findProduct(product) {
    if(product.id === 1) {
        return true;
    }
}*/






