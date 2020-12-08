import { url } from "./components/api.js";
import { getToken } from "./components/common/storage.js";

export default function buttonDelete(id) {

    const container = document.querySelector(".container-delete");

    container.innerHTML = `<button type="button" class="delete">Delete</button>`;

    const deleteButton = document.querySelector("button.delete");

    button.onclick = async function () {
        console.log(id);

        const deleteDo = confirm("Are you sure you want to delete this product?");
        console.log(deleteDo);

        if(deleteDo) {
            const url = url +"products/" + id;

            const token = getToken();
    
            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
    
            try {
                const response = await fetch(url, options)
                const json = await response.json();

                location.href = "/";
    
                console.log(json);
            }
            catch(error) {
                console.log(error); 
            }
        }
    };
}