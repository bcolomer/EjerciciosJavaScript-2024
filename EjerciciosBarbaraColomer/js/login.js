"use strict";

function acceso() {
    alert("Bienvenido!");
    let accesoPermitido = false;
    while (!accesoPermitido) {
        const username = prompt("Por favor, ingrese su nombre de usuario:");
        if (username === null) {
            alert("Cancelando intento de acceso.");
            accesoPermitido = true;
            break;
        }

        const userpass = prompt("Por favor, ingrese la contraseña:");

        if (userpass === null) {
            alert("Cancelando intento de acceso.");
            accesoPermitido = true;
            break;
        }
        if (username === "Jota" && userpass === "dejame") {
            accesoPermitido = true;
            alert("Credenciales correctas. Accediendo...");
            document.getElementById("mainContent").style.display = "block";
        } else {
            alert("Las credenciales ingresadas no son válidas.");
            let reintento = confirm("¿Desea intentarlo de nuevo?");
            if (!reintento) {
                accesoPermitido = true;
                alert("Cancelando intento de acceso.");
            }
        }
    }
}
window.onload = function () {
    acceso();
};
