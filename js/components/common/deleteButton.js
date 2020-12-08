import { url } from "./components/api.js";
import { storeToken } from "./components/common/storage.js";

export default function buttonDelete(id) {

    const container = document.querySelector(".container-delete");

    container.innerHTML = `<button type="button" class="delete">Delete</button>`;
}