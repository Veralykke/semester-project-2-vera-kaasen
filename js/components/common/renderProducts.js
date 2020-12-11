

export function renderProducts(productsToRender) {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = "";

    
    productsToRender.forEach(function (product) {
        console.log(product);
        productContainer.innerHTML += `
        <div class="product">
            <h4>${product.title}</h4>
            <p>Price: ${product.price}</p>
            <img class="product-images" src="${product.image_url}" alt="product-images">
            <button onclick = "(${product.id})">More</button>
        </div>`;                                                      
    });
}

