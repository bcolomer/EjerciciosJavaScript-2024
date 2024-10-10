"use strict";

// Función para crear la cookie
function setCookie(name, value, segundos) {
    const encodedValue = encodeURIComponent(value); // Codificar el valor antes de guardarlo
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + segundos * 1000); // segundos en milisegundos
    const expiration = "expires=" + fecha.toUTCString();
    document.cookie =
        name +
        "=" +
        encodedValue + // Usar el valor codificado aquí
        ";" +
        expiration +
        ";path=/;SameSite=Strict;Secure";
}
