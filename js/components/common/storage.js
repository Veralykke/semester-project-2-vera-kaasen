
export function getExistingFavs() {
    const favProd = localStorage.getItem("favourites");

    if(favProd === null) {
        return [];
    }
    else {
        return JSON.parse(favProd);
    }
}



/*LOG IN NY MÅTE */
/*async function doLogin(username, password) {

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
    catch (error) {
    console.log("token stored <3");
        }

export { doLogin, storeToken };*/



