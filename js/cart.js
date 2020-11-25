import clearbtn from "./components/common/clearButton.js";
import { getExistingFavs } from "./components/common/storage.js";


const favourites = getExistingFavs();
console.log(addedproducts); // sjekke hva vi får fra funksjonen

clearbtn();

const results = document.querySelector(".cart-container");

if (favourites.length == 0) {
    results.innerHTML = " You have nothing in your cart yet";
}

favourites.forEach((details) => {
    results.innerHTML += ` <div id="product-${details.id}" class="product"
                                    <h4>${detail.title}</h4>    
                                    <p>Price: ${details.price}$</p>
                                    data-image = "http://localhost:1337${details.image.url}">
                                    <button class "pro add-to-cart">
                                    </div>`;
});
