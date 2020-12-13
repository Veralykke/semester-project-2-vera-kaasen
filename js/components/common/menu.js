import { getUserName } from "../../components/common/storage.js";
import logoutBtn from '../common/logoutButton.js';

export default function makeMenu() {
const { pathname } = document.location;

const container = document.querySelector(".menu-container");

const username = getUserName();


let authLink =  `<a href="login.html" class="${pathname === "login.html" ? "active" : ""}">Login</a>`;

if (username == "admin") {
    authLink = `<a href="admin.html" class="${pathname === "admin.html" ? "active" : ""}">Admin</a>
    <button id="logout">Logout ${username}</button>`;        
} else if (username){
   authLink = `<button id="logout">Logout ${username}</button>`;
} else {
    authLink =  `<a href="login.html" class="${pathname === "login.html" ? "active" : ""}">Login</a>`;
}

//console.log(username);

container.innerHTML = `<div class="myMenu">
                            <a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a>
                            ${authLink}
                        </div>`;

    logoutBtn();
}