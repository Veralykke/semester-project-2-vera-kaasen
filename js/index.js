import {url} from "./components/api.js";
import displayMessage from "./components/common/displayMessage.js";
import {hamburgerMenu} from "./hamburger.js";
/*import validateForm from "./components/common/doLogin.js";*/


/* Get hero-banner image */
const heroBannerUrl = url + "home";
(async function() {
    try {
        const response = await fetch(heroBannerUrl);
        const json = await response.json();

        document.querySelector(".cover-image").src =`http://localhost:1337${json.hero_banner.url}`;
    }
    catch (error) {
        console.log(error);
        displayMessage("error", error, ".featured-container");
    }
})();


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
        /* If featured product, render it, else skip it */
        if(product.featured ){
            container.innerHTML += `
            <a class="product" href="detail.html?id=${product.id}">
                <h4>${product.title}</h4>
                <p>Price: ${product.price}</p>
                <img class="product-images" src="http://localhost:1337${product.image.url}" alt="product-images">
            </a>`;
        }
    });
}

/* Login button to toggle show or hide login form */
const loginButton = document.querySelector(".login-button-toggle");
loginButton.addEventListener("click", loginForm);

function loginForm(){
    document.querySelector("#formId").classList.toggle("login-hidden");
}

