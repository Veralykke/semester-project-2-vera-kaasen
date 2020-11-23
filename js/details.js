import { url } from "./components/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { getExistingFavs } from "./components/common/storage.js";


const detailContainer = document.querySelector(".detail-container");

const productDetailUrl = url + "products/" + id;     //<----------??????????????????????????????+

const addedproducts = getExistingFavs();

products.forEach((product) => {  

let cssClass = "far";

// does the product id exist in the fav arrey?
const doesObjectExist = favourites.find(function(fav) {
    console.log(fav)

    return parseInt(fav.id) === product.id;
});

console.log(doesObjectExist);
//if the product id exist in the fav arrey, change the style of the i element
if(doesObjectExist) {
    cssClass = "fa";
}

    detailContainer.innerHTML += `div class= "product">
                                <h1>${product.title}</h1>
                                <p>Description:${product.description}</p>
                                <img src="http://localhost:1337${product.image.url}" alt="">
                                <p>Price:${product.price}</p>
                                <i class= "fa fa-heart" data-id="${product.id}" data-name= "${product.name}"></i>
                                </div>`;
                                //???<button class="add-to-cart" onclick = "(${product.id})">More</button>
    });
                        

const productButtons = document.querySelectorAll(".add-to-cart");

productButtons.forEach(button) => {
    button.addEventListener("click", handleClick);
}

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



/*NY MÅTE*/
/*const queryString = document.location.search;

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
    
        container.innerHTML += `
                <h1>${product.title}</h1>
                <p>Description:${product.description}</p>
                <img src="http://localhost:1337${product.image.url}" alt="">
                <p>Price:${product.price}</p>
                <button class="add-to-cart" onclick = "(${product.id})">More</button>`;

        console.log(details);
    }
        catch (error) {
            displayMessage("error", error, ".detail-container");
        }
})();*/









/*ADD TO CART -LEGG PÅ DETALJ PAGE- NY FORBEDRET MÅTE*/
/*function addCart(productId){*/

    /* We get the data attributes from the product ID */
    /*const product = document.querySelector("#product-"+productId).dataset;*/

    /* We store the current product to local storage as a string (JSON.stringufy) */
    /*localStorage.setItem("product", JSON.stringify(product));*/

    /* We parse the localStorage data to JSON data and can use it */
    /*const parsedData = JSON.parse(localStorage.getItem("product"));*/

    /* Here we display the product title */
    /*console.log(parsedData.title);*/

    /* 
        When we finish the function and make it add more products to the cart.
        It will be an array of objects, and we do an forEach loop on all producs and render it
        Just like we have in the 'fetch' to show the HTML (or as above)
     */
/*}

window.addCart = addCart;*/


