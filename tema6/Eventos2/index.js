"use strict";

document.getElementById("div1").onclick = function clicar(){
    alert("Has clicado en el div1");
}

document.getElementById("div2").onmousemove = function cambiarColor(){
    document.getElementById("div3").style.backgroundColor = "green";
}

//Formulario

let botonCalcular = document.getElementById("enviar");
botonCalcular.addEventListener("click", () =>{

    let numero1 = parseFloat(document.getElementById("precio").value);
    let numero2 = parseFloat(document.getElementById("cantidad").value);

    let resultado = numero1 * numero2;

    document.getElementById("total").value = resultado;

});

//Que pulso

let divs = document.getElementsByClassName("boton");

divs[0].addEventListener("click", () =>{
    alert("Has pulsado en el botón 1");
});

divs[1].addEventListener("click", () =>{
    alert("Has pulsado en el botón 2");
});

//Entrar y salir

let cuadroColor = document.getElementById("cuadro");

cuadroColor.addEventListener("mouseover", () => {
    cuadroColor.style.backgroundColor = "red"
});

cuadroColor.addEventListener("mouseout", () => {
    cuadroColor.style.backgroundColor = "white"
});

//Coordenadas

window.addEventListener("mousemove", (e) => {   
    
    let coordenadaX = e.clientX;
    let coordenadaY = e.clientY;

    document.getElementById("cX").value = coordenadaX
    document.getElementById("cY").value = coordenadaY;

});

//3 colores

document.getElementById("c1").addEventListener("mouseover", () => {
    document.getElementById("c2").addEventListener("mouseover", () => {
        document.getElementById("c2").style.backgroundColor = "red";
    });
});

document.getElementById("c3").addEventListener("mouseover", () => {
    document.getElementById("c2").addEventListener("mouseover", () => {
        document.getElementById("c2").style.backgroundColor = "blue";
    });
});