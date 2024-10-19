"use strict";
let intervalo;
function todoMayuscula() {
    let resultado = document.getElementById("resultado").value;
    resultado = resultado.toUpperCase();

    document.getElementById("resultado").value = resultado;
}
function todoMinuscula() {
    let resultado = document.getElementById("resultado").value;
    resultado = resultado.toLowerCase();
    document.getElementById("resultado").value = resultado;
}
function primeraMayuscula() {
    let resultado = document.getElementById("resultado").value;

    let palabras = resultado.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if (palabra.length > 0) {
            palabras[i] =
                palabra.charAt(0).toUpperCase() +
                palabra.slice(1).toLowerCase();
        }
    }

    resultado = palabras.join(" ");

    document.getElementById("resultado").value = resultado;
}
function ultimaMayuscula() {
    let resultado = document.getElementById("resultado").value;

    let palabras = resultado.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if (palabra.length > 0) {
            palabras[i] =
                palabra.slice(0, -1).toLowerCase() +
                palabra.charAt(palabra.length - 1).toUpperCase();
        }
    }

    resultado = palabras.join(" ");

    document.getElementById("resultado").value = resultado;
}
function primeraMinuscula() {
    let resultado = document.getElementById("resultado").value;

    let palabras = resultado.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if (palabra.length > 0) {
            palabras[i] =
                palabra.charAt(0).toLowerCase() +
                palabra.slice(1).toUpperCase();
        }
    }

    resultado = palabras.join(" ");

    document.getElementById("resultado").value = resultado;
}
function ultimaMinuscula() {
    let resultado = document.getElementById("resultado").value;

    let palabras = resultado.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if (palabra.length > 0) {
            palabras[i] =
                palabra.slice(0, -1).toUpperCase() +
                palabra.charAt(palabra.length - 1).toLowerCase();
        }
    }

    resultado = palabras.join(" ");

    document.getElementById("resultado").value = resultado;
}
function vocalesMayusculas() {
    let resultado = document.getElementById("resultado").value;
    resultado = resultado.replaceAll(/[aeiouáéíóúü]/gi, (letra) =>
        letra.toUpperCase()
    );

    document.getElementById("resultado").value = resultado;
}
function vocalesMinusculas() {
    let resultado = document.getElementById("resultado").value;
    resultado = resultado.replaceAll(/[aeiouáéíóúü]/gi, (letra) =>
        letra.toLowerCase()
    );

    document.getElementById("resultado").value = resultado;
}
function consonantesMayusculas() {
    let resultado = document.getElementById("resultado").value;
    resultado = resultado.replaceAll(/[bcdfghjklmnñpqrstvwxyz]/gi, (letra) =>
        letra.toUpperCase()
    );

    document.getElementById("resultado").value = resultado;
}
function consonantesMinusculas() {
    let resultado = document.getElementById("resultado").value;
    resultado = resultado.replaceAll(/[bcdfghjklmnñpqrstvwxyz]/gi, (letra) =>
        letra.toLowerCase()
    );

    document.getElementById("resultado").value = resultado;
}

function toggle() {
    const funciones = [
        todoMayuscula,
        todoMinuscula,
        primeraMayuscula,
        ultimaMayuscula,
        primeraMinuscula,
        ultimaMinuscula,
        vocalesMayusculas,
        vocalesMinusculas,
        consonantesMayusculas,
        consonantesMinusculas,
    ];

    funciones[Math.floor(Math.random() * funciones.length)]();
}

function aleatorio() {
    clearInterval(intervalo);

    intervalo = setInterval(toggle, 1500);
}
function parar() {
    clearInterval(intervalo);
    intervalo = null;
}

function rapido() {
    clearInterval(intervalo);
    intervalo = setInterval(toggle, 700);
}

function lento() {
    clearInterval(intervalo);
    intervalo = setInterval(toggle, 10000);
}
