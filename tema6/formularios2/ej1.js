"use strict";

let form = document.getElementById("form");

form.addEventListener("submit", (event) => {

    let fallo = document.getElementById("fallo");

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;

    let expresion = /^[A-Za-z\s]+$/;

    if(nombre == "" || apellidos == ""){
        fallo.value = "Se deben de introducir tanto nombre como apellidos";
    }

    if(!expresion.test(nombre) || !expresion.test(apellidos)){
        fallo.textContent = "Los nombres y apellidos solo pueden contener letras";
    }




    

});