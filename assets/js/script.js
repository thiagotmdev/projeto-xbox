let body = document.querySelector("body");
let product = document.querySelector(".product");

function changeConsole(color, image){
    product.classList.add("change-effect");

    body.style.background = color;

    setTimeout(() => {
        product.src = image;
        product.classList.remove("change-effect");
    }, 500);
}