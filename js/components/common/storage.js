//ADD TO CART
export function getExistingFavs() {
    const favProd = localStorage.getItem("favourites");

    if(favProd === null) {
        return [];
    }
    else {
        return JSON.parse(favProd);
    }
}
//ADD TO CART

//Log in and save password
const tokenKey="token";
const userKey = "user";

export function saveToken(token) { //saveToken
saveToStorage(tokenKey, token); //saveToStorage
}

export function getToken() {
   return getFromStorage(tokenKey);
}

export function saveUser(user) {
    saveToStorage(userKey, user);
}

export function getUserName() {
    const user = getFromStorage(userKey);

    if (user) {
        return user.username;
    }

    return null;
}

export function clearStorage() {
    localStorage.clear();
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

    function getFromStorage(key) {
        const value = localStorage.getItem(key);

        if(!value) {
            return [];
        }

        return JSON.parse(value);
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
    console.log("token stored");
        }

export { doLogin, storeToken };*/



