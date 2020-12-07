import { url } from "./components/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { getExistingFavs } from "./components/common/storage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productDetailUrl = url + "products/" + id;

const form = document.querySelector("form");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const inputId = document.querySelector("id");
const adminMessage = document.querySelector(".message-container");
const loading = document.querySelector(".loading");