//CART
export function getExistingFavs() {
    const favProd = localStorage.getItem("favourites");

    if(favProd === null) {
        return [];
    }
    else {
        return JSON.parse(favProd);
    }
}
//CART

//Log in and save password
const keyToken ="token";
//EMAIL?
const keyUser = "user";

export function storeToken(token) { //saveToken
saveStorage(keyToken, token); //saveToStorage
}

export function getToken() {
   return getFromStorage(keyToken);
}

export function userSave(user) {
    saveStorage(keyUser, user);
}

export function getUserName() {
    const user = getFromStorage(keyUser);

    if(user) {
        return user.username;
    }

    return null;
}

function saveStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

    function getFromStorage(key) {
        const value = localStorage.getItem(key);

        if(!value) {
            return [];
        }

        return JSON.parse(value);
    }

//




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
    console.log("token stored");
        }

export { doLogin, storeToken };*/



