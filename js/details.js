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
                <h1>${product.title}</h1>
                <p>Description:${product.description}</p>
                <img src="http://localhost:1337${product.image.url}" alt="">
                <p>Price:${product.price}</p>`;
        
        console.log(details);
    }
        catch (error) {
            displayMessage("error", error, ".detail-container");
        }
})();


/*ADD TO CART -LEGG PÅ DETALJ PAGE-*/
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


