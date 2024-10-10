"use strict";
function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split("; ");
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i];
        if (cookie.indexOf(cookieName) === 0) {
            return "true";
        }
    }
    return null; // Si no encuentra la cookie, devuelve null
}
/**expirar la cookie y volver al login, que chequee cada segundo si la cookie esta activa:*/
setInterval(() => {
    let session = getCookie("username");
    if (!session) {
        alert(
            "La sesión ha expirado. Por favor introduzca sus credenciales nuevamente"
        );
        window.location.href = "../index.html"; // Redirige al login o realiza alguna otra acción
    }
}, 1000); // Verifica cada segundo si la cookie sigue activa
