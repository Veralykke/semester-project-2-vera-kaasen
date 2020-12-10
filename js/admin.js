//import clearbtn from "./components/common/clearButton.js";
//import { doLogin } from "./components/common/storage.js";

//TESTE SLETTE??
const formProduct = document.querySelector("admin-form");

formProduct.addEventListener("submit", e => {
e.preventDefault();

const request = new XMLHttpRequest();

request.open('POST', '/upload');

request.send(new FormData(formElement));
});
//SLETTE?
//<button id="clearButton" type="button">Delete</button> 
// CODE FROM -------------> https://strapi.io/documentation/3.0.0-beta.x/plugins/upload.html#upload-files 

//TESTE









