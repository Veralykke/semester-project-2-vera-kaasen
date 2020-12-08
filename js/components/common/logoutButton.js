import { clearStorage } from "../../components/common/storage.js";

export default function logoutBtn() {
    const button = document.querySelector("#logoutBtn");

    if(button) {
        button.onclick = function() {
        const doLogout = confirm("Are you sure you want to log out?");

        if(doLogout) {
            clearStorage();
            location.href = "/";
        }
    };
  }
}   