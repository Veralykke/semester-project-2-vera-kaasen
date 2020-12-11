import {hamburgerMenu} from "./hamburger.js";
import clearbtn from "./components/common/clearButton.js";
import { getExistingFavs } from "./components/common/storage.js";

const favourites = getExistingFavs();
console.log(favourites); // sjekke hva vi får fra funksjonen

clearbtn();

const results = document.querySelector(".cart-container");
var cartTotal = 0;
if (favourites.length === 0) {
    results.innerHTML = " You have nothing in your cart yet";
} else {
    results.innerHTML = "";
    favourites.forEach((details) => {
        results.innerHTML += `
            <div id="product-${details.id}" class="product">
                <h4>${details.name}</h4>    
                <p>Price: ${details.price}</p>
                <img class="product-images" src="${details.image}">
                <a class="productView" href="detail.html?id=${details.id}">View</a>
            </div>`;
            

//TESTE TOTAL PRICE
cartTotal = cartTotal + parseInt(details.price);
console.log(cartTotal);

    });
}
document.getElementById("priceTotal").innerHTML = cartTotal + "$";
 //containerTotal.innerHTMl += `<div class ="cart-total">Total: ${cartTotal}, </div>`;
 console.log(cartTotal);
 //TESTE TOTAL PRICE




