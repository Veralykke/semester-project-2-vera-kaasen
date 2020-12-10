export default function clearbtn() {
    const clearButton = document.querySelector("#clearButton");
    clearButton.addEventListener("click", clearFav);

    function clearFav() {
        //clear the storage
        localStorage.clear();
        //adding an emty html
        const results = document.querySelector(".cart-container");

        results.innerHTML = "";
    }
}