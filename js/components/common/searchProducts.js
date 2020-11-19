import { renderProducts } from "./components/common/renderProducts.js";

export function searchProducts(products) {
    const search = document.querySelector(".search-box");

    search.onkeyup = function () {
    
        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProducts = products.filter(function (product) {
                if(product.full_name.toLowerCase().startsWith(searchValue)) {
                    return true;
                }
        });

        renderProducts(filteredProducts); 
    };
}