
export const hamburgerMenu = document.querySelector(".hamburger");
export const menuLinks = document.querySelector(".menu-links");

export const hamburgerEventListener = hamburgerMenu.addEventListener("click", showMenu => {
    const hamburgerToggle = menuLinks.style.display;
    if(hamburgerToggle === "none"){
        menuLinks.style.display = "flex";
    }else{
        menuLinks.style.display = "none";
    }
});