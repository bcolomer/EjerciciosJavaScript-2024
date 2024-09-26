"use strict";

function acceso() {
    alert("Bienvenido!");
    const username = prompt("Por favor, ingrese su nombre de usuario:");
    const userpass = prompt("Por favor, ingrese la contraseña");
    if (username === "Profesor" && userpass === "Jota") {
        alert("Credenciales correctas. Accediendo...");
        document.getElementById("mainContent").style.display = "block";
    } else {
        alert("Las credenciales ingresadas no son válidas.");
    }
}
window.onload = function () {
    acceso();
};
