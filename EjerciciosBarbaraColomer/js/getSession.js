"use strict";
function getSessionStorage(name) {
    const value = sessionStorage.getItem(name);
    console.log(`sessionStorage: Recuperado ${name}=${value}`);
    return value ? decodeURIComponent(value) : null;
}
setInterval(() => {
    const session = sessionStorage.getItem("username");
    const sessionStart = sessionStorage.getItem("sessionStart");
    const sessionDurationLimit = 1000000; //30000 son 30 segundos?

    if (!session || Date.now() - sessionStart > sessionDurationLimit) {
        alert("Tu sesión ha expirado. Por favor, inicia sesión nuevamente.");
        sessionStorage.clear(); // Limpiar la sesión
        window.location.href = "/index.html"; // Redirigir al login
    }
}, 1000); // Verifica cada segundo si la sesión sigue activa
