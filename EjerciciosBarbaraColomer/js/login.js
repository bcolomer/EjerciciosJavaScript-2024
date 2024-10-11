"use strict";

// Función para validar el usuario
function validarUsuario(username) {
    // Expresión regular para solo letras y longitud mínima de 3 caracteres
    const usernameRegex = /^[A-Za-zÑñ]{3,}$/;
    let result = true;

    // Limpiar mensajes de error anteriores
    document.getElementById("userError").innerText = "";

    // Validar el usuario con regex
    if (username === "") {
        document.getElementById("userError").innerText =
            "Por favor, ingrese un usuario.";
        result = false;
    } else if (!usernameRegex.test(username)) {
        document.getElementById("userError").innerText =
            "El usuario debe tener al menos 3 caracteres y solo puede contener letras.";
        result = false;
    }

    return result;
}

// Función para validar la contraseña
function validarPassword(password) {
    // Limpiar mensajes de error anteriores
    document.getElementById("passwordErrorMessage").innerText = "";
    let result = true;

    // Validar la contraseña
    if (password === "") {
        document.getElementById("passwordErrorMessage").innerText =
            "Por favor, ingrese una contraseña.";
        result = false;
    }

    return result;
}

// Función para validar ambas credenciales (usuario y contraseña correctos)
function credencialesCorrectas(username, password) {
    // Verifica si las credenciales exactas son correctas
    return username === "Jota" && password === "dejame";
}

// Función principal de acceso
function acceso() {
    document
        .getElementById("loginForm")
        .addEventListener("submit", function (event) {
            // Evita que el formulario se envíe de manera predeterminada
            event.preventDefault();

            // Guardar en variables la información ingresada por el formulario
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value;

            // Limpiar mensajes de error generales
            document.getElementById("generalErrorMessage").innerText = "";

            // Validar usuario y contraseña
            const esUsuarioValido = validarUsuario(username);
            const esPasswordValida = validarPassword(password);

            // Si ambos campos pasan la validación de campos vacíos, verificar si las credenciales son correctas
            if (esUsuarioValido && esPasswordValida) {
                if (!credencialesCorrectas(username, password)) {
                    // Mostrar mensaje de error general si las credenciales no coinciden
                    document.getElementById("generalErrorMessage").innerText =
                        "Los datos ingresados no son válidos. Por favor, inténtelo nuevamente.";
                } else {
                    //guardar la cookie
                    setCookie("username", username, 600); // Guardar la cookie con nombre de usuario por 15 segundos
                    // Mostrar mensaje de bienvenida
                    const mensajeBienvenida = document.getElementById(
                        "generalErrorMessage"
                    );
                    mensajeBienvenida.innerText = "¡Bienvenido!";
                    mensajeBienvenida.style.color = "green"; // Cambiar el color a verde

                    // Redirigir después de 1 segundos
                    setTimeout(() => {
                        window.location.href = "./ejercicios/index.html";
                    }, 1000);
                }
            }
        });
}
acceso();
