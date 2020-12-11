import displayMessage from "./components/common/displayMessage.js";
import makeMenu from "./components/common/menu.js";
import { getExistingFavs } from "././components/common/storage.js";
import { url } from "./components/api.js";

makeMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productDetailUrl = url + "products/" + id;

const favourites = getExistingFavs();
favourites.forEach((details) => {
    
    let cssClass = "prodB";
//does the product exist in the favprod array
    const doesObjectExist = favourites.find(function (fav) {
        return parseInt(fav.id) === details.id;
    });

    if (doesObjectExist) {
        cssClass ="pro"; 
    }
});

(async function () {
    try {
        const response = await fetch(productDetailUrl);
        const details = await response.json();
        
        document.title = details.name;
        const cssClass = "";
    
        const container = document.querySelector(".detail-container");
        container.innerHTML = "";
    
        container.innerHTML += `
        <div id="product-${details.id}" class="product">
            <h4>${details.title}</h4>
            <p>Price: ${details.price}</p>
            <img class="product-images" src="${details.image_url}" alt="product-images">
            <p>Description: ${details.description}</p>
            <button class = "${cssClass} add-to-cart" 
                data-id="${details.id}"
                data-title = "${details.title}" 
                data-price = "${details.price}"
                data-description = "${details.description}"
                data-image = "${details.image_url}">
            Add to cart</button>
        </div>`;

        const favButton = document.querySelector(".add-to-cart");
        favButton.addEventListener("click", handleClick);
        console.log("Clicked");
    }
        catch (error) {
            displayMessage("error", error, ".detail-container");
        }
})();

  function handleClick(event) {
    const id = this.dataset.id;
    const name = this.dataset.title;
    const price = this.dataset.price;
    const image = this.dataset.image;

    const currentFavs = getExistingFavs();

    const productExist = currentFavs.find(function(fav) {
        return fav.id === id;
    });
    /* if cart is empty and first time
       make an array and add it to the card and store the localStorage
       else just save directly to storage */
    if(productExist === undefined) { 
        const product = { id: id, name: name, price: price, image: image };
        console.log(product);
        currentFavs.push(product);
        saveFavs(currentFavs);
   } else { //Remove from Cart
       const newFavs = currentFavs.filter(fav => fav.id !== id);
       saveFavs(newFavs);
   }

}
 
function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs)); //we have to "stringify it"
}

/*ADD TO CART* NY MÅTE 

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

//TESTE SUM CART

/*function getTotalPrice() {
    var totalPrice = 0;
    $("").find(".price").each(function() {
    totalPrice += parseFloat($(this());
    });
    return totalPrice;
}

function updateCart() {
    $("").html (getTotalCost() );
}*/

//TESTE SUM CART