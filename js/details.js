import { url } from "./components/api.js";
import displayMessage from "./components/common/displayMessage.js";


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productDetailUrl = url + "products/" + id;

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
            <button onclick href= details.html class= "add-to-cart" = "addCart(${details.id})">Add to cart</button>
        </div>`;
    }
        catch (error) {
            displayMessage("error", error, ".detail-container");
        }
})();
//bort

/*ADD TO CART..NY MÅTE*/
function addCart(productId){

    /* We get the data attributes from the product ID */
    const product = document.querySelector("#product-"+productId).dataset;

    /* We store the current product to local storage as a string (JSON.stringufy) */
    localStorage.setItem("product", JSON.stringify(product));

    /* We parse the localStorage data to JSON data and can use it */
    const parsedData = JSON.parse(localStorage.getItem("product"));

    /* Here we display the product title */
    console.log(parsedData.title);

    /* 
        When we finish the function and make it add more products to the cart.
        It will be an array of objects, and we do an forEach loop on all producs and render it
        Just like we have in the 'fetch' to show the HTML (or as above)
     */
}

window.addCart = addCart;


/*
ANNA MÅTE

function handleClick() {
    console.log(event);
    event.target.classList.toggle("fa");
    event.target.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.name;

   //console.log("id", id);

   const currentFavs = getExistingFavs();
   
   const productExist = currentFavs.find(function(fav) {
       return fav.id === id;
   });

   if(productExist === undefined) {
        const Product = { id: id, name: name};
        currentFavs.push(product);
        saveFavs(currentFavs);
   }
   else {
       const newFaws = currentFavs.filter(fav => fav.id !== id);
       saveFavs(newFavs);
   }
}


function saveProducts(favs) {
    localStorage.setItem("cart", JSON.stringify(favs));
}
*/





