import { getUserName } from "../../components/common/storage.js";
import logoutBtn from './logoutButton.js';

export default function makeMenu() {
const { pathname } = document.location;

const container = document.querySelector(".menu-container");

const username = getUserName();


let authLink =  `<a href="login.html" class="${pathname === "login.html" ? "active" : ""}">Login</a>`

if (username) {
    authLink = `<span>Hello ${username}</span>`;           
}

console.log(username);

container.innerHTML = `<div class="myMenu">
                            <a href="/" class="${pathname === "/" ? "active" : ""}">Home</a>
                            ${authLink}
                        </div>`;

    logoutBtn();
}