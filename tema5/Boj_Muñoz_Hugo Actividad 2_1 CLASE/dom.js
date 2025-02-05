'use strict'

// 1. El elemento con id ‘input2’
const input2_v1 = document.getElementById("input2");
const input2_v2 = document.querySelector("#input2");
console.log("Elemento con id ‘input2’ (Forma 1):", input2_v1);
console.log("Elemento con id ‘input2’ (Forma 2):", input2_v2);

// 2. La colección de párrafos
const allParagraphs_v1 = document.getElementsByTagName("p");

console.log("Colección de párrafos (Forma 1):", allParagraphs_v1);


// 3. Párrafos dentro del div ‘lipsum’
const lipsumDiv = document.getElementById("lipsum");
const lipsumParagraphs_v1 = lipsumDiv.getElementsByTagName("p");

console.log("Párrafos dentro del div ‘lipsum’ (Forma 1):", lipsumParagraphs_v1);


// 4. El formulario (no la colección)
const form_v1 = document.getElementById("myForm");

console.log("Formulario (Forma 1):", form_v1);


// 5. Todos los inputs
const allInputs_v1 = document.getElementsByTagName("input");

console.log("Todos los inputs (Forma 1):", allInputs_v1);


// 6. Sólo los inputs con nombre ‘sexo’
const sexoInputs_v1 = document.getElementsByName("sexo");

console.log("Inputs con nombre ‘sexo’ (Forma 1):", sexoInputs_v1);


// 7. Items de lista de la clase ‘important’ (sólo los LI)
const importantItems_v1 = document.querySelectorAll("li.important");

console.log("Items de lista ‘important’ (Forma 1):", importantItems_v1);


// 8. El primer párrafo dentro del div ‘lipsum’ (dos formas)
const firstParagraph_v1 = lipsumDiv.firstElementChild;
const firstParagraph_v2 = lipsumDiv.querySelector("p:first-of-type");
console.log("Primer párrafo dentro de ‘lipsum’ (Forma 1):", firstParagraph_v1);
console.log("Primer párrafo dentro de ‘lipsum’ (Forma 2):", firstParagraph_v2);

// 9. El segundo párrafo dentro del div ‘lipsum’ (dos formas)
const secondParagraph_v1 = lipsumDiv.firstElementChild.nextElementSibling;
const secondParagraph_v2 = lipsumDiv.querySelectorAll("p")[1];
console.log("Segundo párrafo dentro de ‘lipsum’ (Forma 1):", secondParagraph_v1);
console.log("Segundo párrafo dentro de ‘lipsum’ (Forma 2):", secondParagraph_v2);

// 10. El último item de la lista (dos formas)
const lastListItem_v1 = document.querySelector("ul li:last-of-type");
const lastListItem_v2 = document.querySelector("ul").lastElementChild;
console.log("Último item de la lista (Forma 1):", lastListItem_v1);
console.log("Último item de la lista (Forma 2):", lastListItem_v2);

// 11. La label de ‘Escoge sexo’ (dos formas)
const labelSexo_v1 = Array.from(document.getElementsByTagName("label")).find(label => label.textContent.includes("Escoge el sexo"));
const labelSexo_v2 = document.querySelector("label:last-of-type");
console.log("Label de ‘Escoge sexo’ (Forma 1):", labelSexo_v1);
console.log("Label de ‘Escoge sexo’ (Forma 2):", labelSexo_v2);



