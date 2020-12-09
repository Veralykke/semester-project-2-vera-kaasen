var myLoader;

export function myLoaderFunction() {
    myLoader = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
}