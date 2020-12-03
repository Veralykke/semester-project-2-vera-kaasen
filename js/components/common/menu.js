export default function makeMenu() {
const { pathname } = document.location;

//console.log(pathname);

const container = document.querySelector(".menu-container");

const username = 

container.innerHTML = `<div class="myMenu">
                            <a href="/" class="${pathname === "/" ? "active" : ""}">Home</a>
                            <a href="product.html" class="${pathname === "/login.html" ? "active" : ""}">Products</a>
                            <a href="cart.html" class="${pathname === "/login.html" ? "active" : ""}">Cart</a> 
                            <a href="admin.html"class="${pathname === "/login.html" ? "active" : ""}" >Login</a>  
                        </div>`;
}