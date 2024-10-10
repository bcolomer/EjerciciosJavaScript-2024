"use strict";

if (getCookie("username") === "true") {
    console.log("la cookie existe");
} else {
    console.log("la cookie desaparecio");
    window.location.assign("../index.html");
}

function mostrar() {
    console.log(
        `Estoy mostrando el resultado del ${resultado.getAttribute("name")}`
    );
    resultado.innerHTML = `Estoy mostrando el resultado del ${resultado.getAttribute(
        "name"
    )}`;
}
