import { renderProducts } from "./renderProducts.js";

export function searchFunction(products) {
    //gets the input from searchbox
    const search = document.getElementById("search-box");

    search.onkeyup = function () {
        //defines input
        var input;
        //takes the input value (text) trims whitespace and changes every character to lowercase
        input = search.value.trim().toLowerCase();
        //applies filter
        const filteredProducts = products.filter(function (product) {
            if(product.title.toLowerCase().includes(input)){
                return true;
            }
        });
        //renders the filtered products
        renderProducts(filteredProducts);
    };
}