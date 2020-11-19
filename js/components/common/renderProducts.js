
export function renderProducts(productsToRender) {
    const productContainer = document.querySelector(".product-container");
    product.container.innerHTML = "";

    productsToRender.forEach(function (product) {
        productContainer.innerHTML += `<div class="product>
                                        <h4>${product.title}</h4>
                                        <p>Price: ${product.price}</p>
                                        <img class="product-images" src="http://localhost:1337${product.image.url}" alt="product-images">
                                        <button onclick = "(${product.id})">More</button>
                                        </div>`;
                                                                    
    });
}