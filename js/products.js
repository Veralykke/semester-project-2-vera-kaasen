import {hamburgerMenu} from "./hamburger.js";
import {url} from "./components/api.js";


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
        <div id="product-${product.id}" class="product" 
            data-title = "${product.title}" 
            data-price = "${product.price}"
            data-image = "http://localhost:1337${product.image.url}">

            <h4>${product.title}</h4>
            <p>Price: ${product.price}</p>
            <img class="product-images" src="http://localhost:1337${product.image.url}" alt="product-images">
            <button onclick = "addCart(${product.id})">Add to Cart</button>
        </div>`;
    });
}

function addCart(productId){

    /* We get the data attributes from the product ID */
    const product = document.querySelector("#product-"+productId).dataset;

    /* We store the current product to local storage as a string (JSON.stringufy) */
    localStorage.setItem("product", JSON.stringify(product));

    /* We parse the localStorage data to JSON data and can use it */
    const parsedData = JSON.parse(localStorage.getItem("product"));

    /* Here we display the product title */
    console.log(parsedData.title);

    /* 
        When we finish the function and make it add more products to the cart.
        It will be an array of objects, and we do an forEach loop on all producs and render it
        Just like we have in the 'fetch' to show the HTML (or as above)
     */
}

window.addCart = addCart;