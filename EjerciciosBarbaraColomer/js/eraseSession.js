"use strict";

function deleteSessionStorage() {
    sessionStorage.clear(); // Limpiar toda la sesión
    console.log("sessionStorage: Sesión eliminada.");
    // Redirigir al usuario al formulario de login
    window.location.href = "/index.html";
}

// Asociar la acción de borrar la sesion al botón de logout
document
    .getElementById("logOutLink")
    .addEventListener("click", function (event) {
        event.preventDefault();
        deleteSessionStorage(); // Llamar a la función para borrar la sesión
    });
