"use strict";

function binario() {
    let num1 = parseFloat(document.getElementById("op1").value);

    if (isNaN(num1)) {
        document.getElementById("resultado").innerText =
            "Por favor, ingresa un número válido.";
        return;
    }
    //console.log(num1);

    num1 = Math.trunc(num1);
    num1 = Math.abs(num1);
    //console.log(num1);

    let resultado = num1.toString(2);
    document.getElementById("resultado").innerText = resultado;
}

function octal() {
    let num1 = parseFloat(document.getElementById("op1").value);

    if (isNaN(num1)) {
        document.getElementById("resultado").innerText =
            "Por favor, ingresa un número válido.";
        return;
    }
    //console.log(num1);

    num1 = Math.trunc(num1);
    num1 = Math.abs(num1);
    //console.log(num1);
    let resultado = num1.toString(8);
    document.getElementById("resultado").innerText = resultado;
}
function hexadecimal() {
    let num1 = parseFloat(document.getElementById("op1").value);

    if (isNaN(num1)) {
        document.getElementById("resultado").innerText =
            "Por favor, ingresa un número válido.";
        return;
    }
    //console.log(num1);

    num1 = Math.trunc(num1);
    num1 = Math.abs(num1);
    //console.log(num1);
    let resultado = num1.toString(16);
    document.getElementById("resultado").innerText = resultado;
}
