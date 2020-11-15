import {url} from "./components/api.js";
import displayMessage from "./components/common/displayMessage.js";
import {hamburgerMenu} from "./hamburger.js";


/*Adding HTML(json) function here*/
const featuredUrl = url + "products";

(async function() {
    try {
        const response = await fetch(featuredUrl);
        const json = await response.json();
        HTML(json);
    }
    catch (error) {
        console.log(error);
        displayMessage("error", error, ".featured-container");
    }
})();

/* Makes HTML for the Site from JSON */
function HTML(json){
    const container = document.querySelector(".featured-container");
    container.innerHTML = "";

    json.forEach(function (product) {
        container.innerHTML += `
        <a class="product" href="detail.html?id=${product.id}">
            <h4>${product.title}</h4>
            <p>Price: ${product.price}</p>
            <img src="http://localhost:1337${product.image.url}" alt="">
        </a>`;
    });
}






















/*
export const featuredproducts = document.querySelector(".featured-products");

let html = "";

for (let i = 0; i < json.length; i++) {
    console.log(i);

    if (json[i].featured === true) {
        featuredProducts.style.display ="block";
    } else {
        featuredContainer.style.display ="none";
    }

    html += `<h2>Some of our products</h2>
    <p>Do not miss these offers</p>
    <img src"./strapi-api/public${json[i].image.url}" />
    <p>${json[i].title}</p>
    <a jref="#">More </a>`;

}

featuredProducts.innerHTML = html;*/