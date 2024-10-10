"use strict";

// Función para borrar una cookie por su nombre
function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=0; path=/;SameSite=Strict;Secure;";
}

// Asociar la acción de borrar la cookie al botón de logout
document
    .getElementById("logOutLink")
    .addEventListener("click", function (event) {
        event.preventDefault(); // Evitar que el enlace recargue la página

        // Llamamos a la función para borrar la cookie
        eraseCookie("username"); // Asegúrate de que el nombre coincide con el que usas para setCookie

        // Redirigir al usuario de vuelta a la página de login
        window.location.href = "../index.html";
    });
