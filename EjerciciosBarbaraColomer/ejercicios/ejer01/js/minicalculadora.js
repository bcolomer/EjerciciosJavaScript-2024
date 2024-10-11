"use strict";

function suma() {
    let num1 = parseFloat(document.getElementById("op1").value);
    let num2 = parseFloat(document.getElementById("op2").value);
    let resultado = num1 + num2;
    document.getElementById("resultado").innerText = resultado;
}
function resta() {
    let num1 = parseFloat(document.getElementById("op1").value);
    let num2 = parseFloat(document.getElementById("op2").value);
    let resultado = num1 - num2;
    document.getElementById("resultado").innerText = resultado;
}

function division() {
    let num1 = parseFloat(document.getElementById("op1").value);
    let num2 = parseFloat(document.getElementById("op2").value);
    let resultado;
    if (num1 === 0 && num2 === 0) {
        resultado =
            "Imagínate que tienes cero galletas y las repartes entre tus cero amigos. ¿Cuántas gallegas le tocan a cada amigo? No tiene sentido. ¿Lo ves? Así que el Monstruo de las Galletas está triste porque no tiene galletas y tú estás triste porque no tienes amigos.";
    } else if (num1 === 0) {
        resultado =
            "Dividir 0 entre lo que sea siempre será 0. ¡Ni aunque me lo pidas por favor!";
    } else if (num2 === 0) {
        resultado =
            "Lo siento, no puedo dividir entre cero... Ni siquiera con magia.";
    } else {
        resultado = num1 / num2;
    }

    document.getElementById("resultado").innerText = resultado;
}

function multiplicacion() {
    let num1 = parseFloat(document.getElementById("op1").value);
    let num2 = parseFloat(document.getElementById("op2").value);
    let resultado = num1 * num2;
    document.getElementById("resultado").innerText = resultado;
}

function valorEntero() {
    let resultado = document.getElementById("resultado").innerText;
    // Verificar si el resultado es un número
    if (!isNaN(resultado)) {
        resultado = Math.floor(parseFloat(resultado));
        document.getElementById("op1").value = resultado;
    }
}

function parteDecimal() {
    let resultado = document.getElementById("resultado").innerText;
    // Verificar si el resultado es un número
    if (!isNaN(resultado)) {
        let parteEntera, parteDecimal;
        parteEntera = Math.trunc(parseFloat(resultado));
        parteDecimal = resultado - parteEntera;
        document.getElementById("op2").value = parteDecimal;
    }
}

function fibonacci() {
    let num1 = parseFloat(document.getElementById("op2").value);
    let resultado;
    let a = 0;
    let b = 1;
    num1 = Math.trunc(num1);

    if (num1 < 1) {
        resultado =
            "Lo siento, no te puedo dar la secuencia de Fibonacci de una cantidad menor a 1.";
        num1 = Math.abs(num1);
    } else if (num1 === 1) {
        resultado = a; // Para Fibonacci(1) es 0
    } else if (num1 === 2) {
        resultado = b; // Para Fibonacci(2) es 1
    } else {
        for (let i = 2; i < num1; i++) {
            // empieza en 2 porque ya manejamos los dos primeros casos
            resultado = a + b;
            a = b;
            b = resultado;
        }
    }

    document.getElementById("resultado").innerText = resultado;
}

function factorial() {
    let num1 = parseFloat(document.getElementById("op1").value);
    let resultado = 1;
    if (num1 < 0) {
        resultado = "El factorial no está definido para números negativos.";
    } else {
        for (let i = 1; i <= num1; i++) {
            resultado *= i;
        }
    }

    document.getElementById("resultado").innerText = resultado;
}
