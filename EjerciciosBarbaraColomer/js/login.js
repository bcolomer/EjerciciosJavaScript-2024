"use strict";

function acceso() {
    document
        .getElementById("loginForm")
        .addEventListener("submit", function (event) {
            // Evita que el formulario se envíe de manera predeterminada
            event.preventDefault();

            // guardo en variables la informacion ingresada por el formulario
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Si la validación es correcta, redirige a la nueva URL
            if (username === "Jota" && password === "dejame") {
                window.location.href = "./index.html"; // Redirige a la página que desees
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        });
}

window.onload = function () {
    acceso();
};
/* const username = prompt(
            "Por favor, ingrese su nombre de usuario:",
            "Jota"
        );
        if (username === null) {
            alert("Cancelando intento de acceso.");
            accesoPermitido = true;
            break;
        }

        const userpass = prompt("Por favor, ingrese la contraseña:", "dejame");

        if (userpass === null) {
            alert("Cancelando intento de acceso.");
            accesoPermitido = true;
            break;
        }
        if (username === "Jota" && userpass === "dejame") {
            accesoPermitido = true;
            alert("Credenciales correctas. Accediendo...");
            document.getElementById("mainContent").style.display = "block";
            document.getElementById("navContent").style.display = "block";
            document.getElementById("picContent").style.display = "block";
            document.getElementByid("loginContent").style.display = "none";
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

    */
