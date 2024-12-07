/*Ejercicio 2.2 modificar:
function pintar(){
ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar); */

let btn = document.querySelector("button");
function pintar(elemento, color) {
    btn.style.backgroundColor = color;
}

function amarillo() {
    btn.addEventListener("click", function() {
        pintar(btn, "yellow");
    });
}
amarillo();

function fondoverde() {
    pintar(btn, "green");
}
fondoverde();