'use strict'

const input2 = document.getElementById("input2");
console.log(input2);

const parrafos = document.getElementsByTagName("p");
console.log(parrafos);

const lipsum = document.getElementById("lipsum");
const pLipsum = lipsum.getElementsByTagName("p");
console.log(pLipsum);

const form = document.getElementById("myForm");
console.log(form);

const inputs = document.getElementsByTagName("input");
console.log(inputs);

const sexo = document.getElementsByName("sexo");
console.log(sexo);

const liImportant = document.querySelectorAll("li.important");
console.log(liImportant);

const primerParrafo = lipsum.firstElementChild;
console.log(primerParrafo);

const segundoParrafo = lipsum.firstElementChild.nextElementSibling;
console.log(segundoParrafo);

const ultimoLista = document.querySelector("ul").lastElementChild;
console.log(ultimoLista);



