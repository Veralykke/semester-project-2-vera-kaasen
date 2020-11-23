/*NY MÅTE LOG IN*/
async function doLogin(username, password) {

    const url = "http://localhost:1337/";

    const data = JSON.stringify({ identifier: username, password: password});

    const option = {
        method: "POST",
        body: data,
        headers: {"content-Type": "application/json"}
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if(json.jwt);
        window.location.href ="/";
        } else {
        document.querySelector(".error").innerHTML = "Login Failed...";
        }
    }
    catch(error) {
    console.log("token stored <3");
        }

export { doLogin, storeToken };

/*export function getExistingFavs() {
    const favs = localStorage.getItem("cart");
   

    if(favs === null) {
        return [];
    }
    else {
        return JSON.parse(favs);
    }
}
*/
