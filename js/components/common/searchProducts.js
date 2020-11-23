import { renderProducts } from "./renderProducts.js";

export function searchProducts(products) {
    const search = document.querySelector(".search-box");

    search.onkeyup = function () {
        const searchValue = event.target.value.trim().toLowerCase(); 

        const filteredProducts = products.filter(function (product) {
            if( product.title.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue)) {
                return true;
            }
        });

        renderProducts(filteredProducts);
    };
}