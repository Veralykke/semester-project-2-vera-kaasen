import { url } from "./components/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { getExistingFavs } from "./components/common/storage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productDetailUrl = url + "products/" + id;

//TESTE
const favourites = getExistingFavs();
product.forEach((details) => {
    let cssClass = "prodB";
//does the product exist in the favprod array
    const doesObjectExist = favourites.find(function (fav) {
        return parseInt(fav.id) === details.id;
    });

    if (doesObjectExist) {
        cssClass ="pro";
    }
}

(async function () {
    try {
        const response = await fetch(productDetailUrl);
        const details = await response.json();
        
        document.title = details.name;
    
        const container = document.querySelector(".detail-container");
        container.innerHTML = "";
    
        container.innerHTML += `
        <div id="product-${details.id}" class="product" 
            data-title = "${details.title}" 
            data-price = "${details.price}"
            data-image = "http://localhost:1337${details.image.url}">

            <h4>${details.title}</h4>
            <p>Price: ${details.price}$</p>
            <img class="product-images" src="http://localhost:1337${details.image.url}" alt="product-images">
            <button class = "${cssClass} add-to-cart" data-id="${detail.id}" data-name="${detail.title}">
        </div>`;
    }
        catch (error) {
            displayMessage("error", error, ".detail-container");
        }
})();

const favButtons = document.querySelectorAll(".product add-to-cart");

favButtons.forEach((button) => {
    button.addEventListener(".click", handleClick);
  });
}

function handleClick(event) {
    console.log(event);
    event.target.classList.toggle("pro");
    event.target.classList.toggle("prodB");

    const id = this.dataset.id;
    const name = this.dataset.name;

   //console.log("id", id);

   const currentFavs = getExistingFavs();
   
   const productExist = currentFavs.find(function(fav) {
       return fav.id === id;
   });

   if(productExist === undefined) {
        const Product = { id: id, name: name };
        currentFavs.push(product);
        saveFavs(currentFavs);
   }
   else {
       const newFaws = currentFavs.filter(fav => fav.id !== id);
       saveFavs(newFavs);
   }
}

function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(prod));
}
//TESTE

/*ADD TO CART* NY MÅTE NY MÅTE NY MÅTE

function addCart(productId){

    /* We get the data attributes from the product ID */
    //const product = document.querySelector("#product-"+productId).dataset;

    /* We store the current product to local storage as a string (JSON.stringify) */
    //localStorage.setItem("product", JSON.stringify(product));

    /* We parse the localStorage data to JSON data and can use it */
    //const parsedData = JSON.parse(localStorage.getItem("product"));

    /* Here we display the product title */
    //console.log(parsedData.title);

    /* 
        When we finish the function and make it add more products to the cart.
        It will be an array of objects, and we do an forEach loop on all producs and render it
        Just like we have in the 'fetch' to show the HTML (or as above)
     */
//}

//window.addCart = addCart;


