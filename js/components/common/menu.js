import { getUserName } from "../../components/common/storage.js";
import logoutBtn from './logoutButton.js';

export default function makeMenu() {
const { pathname } = document.location;

const container = document.querySelector(".menu-container");

const username = getUserName();


let authLink =  `<a href="login.html" class="${pathname === "login.html" ? "active" : ""}">Login</a>`;

if (username) {
    authLink = `<a href="add.html" class="${pathname === "add.html" ? "active" : ""}">Add product</a>
                <span>Hello ${username}</span> `;           
}

console.log(username);

container.innerHTML = `<div class="myMenu">
                            <a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a>
                            ${authLink}
                        </div>`;

    logoutBtn();
}