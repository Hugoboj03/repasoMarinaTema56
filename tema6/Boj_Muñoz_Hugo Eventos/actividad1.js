"use strict"

/**
 * Actividad 1
 * 
 * Creamos una funcion que mostrara un alert
 */
document.getElementById('div1').onclick = function clicar() {
    alert("Pulsaste sobre el boton");
}


/**
 * Actividad 2
 * 
 * Primero debemos hallar el div que contendra el evento
 * Una vez obtenido obtenemos el elemento del documento deseado por su id y le aplicamos un estilo para cambiar su fondo
 */
let div = document.getElementById("div1").nextElementSibling;
div.addEventListener("mouseover", () => {
    document.getElementById("efecto").style = "background-color:red";

});


/**
 * Actividad 3
 */
let boton = document.getElementById("enviar");

boton.addEventListener("click", () => {

    let num1 = document.getElementById('precio').value;

    let num2 = document.getElementById('cantidad').value;

    if (num1 > 0 && num2 > 0) {
        document.getElementById('total').value = num1 * num2;
    }

});


/**
 * Actividad 4
 */

window.onload = function () {
    document.getElementById("cuadro").addEventListener("mouseover", () => {
        document.getElementById("cuadro").style = "background-color:red";
        document.getElementById("cuadro").addEventListener("mouseleave", () => {
            document.getElementById("cuadro").style = "background-color:white";
        });
    });
}


/**
 * Actividad 5
 */

    let botones = document.getElementsByClassName("boton");
    botones[0].addEventListener("click", () => {

        alert("Pulsaste el boton 1");


    });

    botones[1].addEventListener("click", () => {

        alert("Pulsaste el boton 2");


    });


/**
 * Actividad 6
 */

window.addEventListener("mousemove", () => {
    
        let x = event.clientX;
        document.getElementById("cX").value = x;
        let y = event.clientY;
        document.getElementById("cY").value = y;

})


/**
 * Actividad 7
 */


document.getElementById("c1").addEventListener("mouseover", () => {
    document.getElementById("c2").addEventListener("mouseover", () => {
        document.getElementById("c2").style = "background-color:red";
    });
});


document.getElementById("c3").addEventListener("mouseover", () => {
    document.getElementById("c2").addEventListener("mouseover", () => {
        document.getElementById("c2").style = "background-color:blue";
    });
});

document.getElementById("c2").addEventListener("mouseover", () => {
    document.getElementById("c2").addEventListener("mouseover", () => {
        document.getElementById("c2").style = "background-color:white";
    });
        
    
});



/**
 * Actividad 8
 */


let letras = document.getElementById('letras');

letras.addEventListener("keydown", e =>{

    let inputLetra = e.key;

    if(!isNaN(parseInt(inputLetra))){
        
        alert("No puedes escribir numeros");
        e.preventDefault();
    }

    
});











