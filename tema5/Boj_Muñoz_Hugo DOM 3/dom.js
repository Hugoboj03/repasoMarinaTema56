'use strict'

// Un nuevo párrafo al final del DIV ‘lipsum’ con el texto “Nuevo párrafo añadido por javascript” (fíjate que una palabra está en negrita)

let miDiv = document.getElementById("lipsum");
let textoNegrita = document.createElement("strong");
textoNegrita.textContent = "añadido";

let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Nuevo parrafo ";

let nuevoParrafo2 = document.createElement("label");
nuevoParrafo2.textContent = " por javascript";

nuevoParrafo.appendChild(textoNegrita);

nuevoParrafo.appendChild(nuevoParrafo2);


miDiv.append(nuevoParrafo);

console.log(nuevoParrafo);

// Un nuevo elemento al formulario tras el ‘Input 1’ con la etiqueta ‘Input 1 bis’ y el INPUT con id ‘input1bis’ que al cargar la página tendrá escrito “Hola”

let input = document.getElementById("input3");

let nuevoInput = document.createElement("input");
let texto = document.createElement("label");
texto.textContent = "Input4 ";
nuevoInput.type = "text";
nuevoInput.id = "inputbis";
nuevoInput.value = "Hola";

let saltoLinea = document.createElement("br");

input.after(saltoLinea, texto, nuevoInput);