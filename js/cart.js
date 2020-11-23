import { getExistingFavs } from "./components/common/storage.js";

const addedproducts = getExistingFavs();

const productContainer = document.querySelector(".product-container");

if (addedproducts.length == 0) {
    productContainer.HTML = " You have nothing in your cart yet";
}

addedProducts.forEach(product => {
    productContainer.innerHTML += `div class="product">
                                    <h4>${product.name}</h4>    
                                    <i class="fa fa-heart"></i>
                                    </div>`;
});