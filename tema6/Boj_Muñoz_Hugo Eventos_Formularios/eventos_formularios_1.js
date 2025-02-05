"use strict";


// Edita sólo este fichero

document.getElementById("newEvent").addEventListener("submit", function (event) {



    let formulario = document.getElementById("newEvent");

    let nombre = document.getElementById("name");
    let fecha = document.getElementById("date");
    let texto = document.getElementById("description");
    let precio = document.getElementById("price");
    let imagen = document.getElementById("image");




    let inputs = document.querySelector(".container .form-control");

    let formValido = true;


    if (/\d/.test(nombre.value)) {
        nombre.classList.add("is-invalid");
        event.preventDefault();
        formValido = false;
    }


    if (fecha.value != "") {

        fecha.classList.add("is-valid");
        event.preventDefault();
    }else{
        formValido = false;
    }

    if (texto.value != "") {

        texto.classList.add("is-valid");
        event.preventDefault();
    }else{
        formValido = false;
    }

    if (precio.value != "") {

        precio.classList.add("is-valid");
        event.preventDefault();
    }else{
        formValido = false;
    }

    if (imagen.value != "") {

        imagen.classList.add("is-valid");
        event.preventDefault();
    }else{
        formValido = false;
    }



    Array.from(inputs).filter(inputs => {
        if (inputs.value == null || inputs.value === "") {
            inputs.classList.add("is-invalid");
            event.preventDefault();
            
        } else {
            inputs.classList.add("is-valid");
            inputs.classList.remove("is-invalid");
            formulario.reset();
            
        }
    });



    if (formValido) {

        let contenedor = document.createElement("div");
        let div = document.createElement("div");
        

        //Imagen
        let div2 = document.createElement("div");
        div2.className = "card";
        let img = document.createElement("img");
        //img.src = document.getElementById("image").src;
        img.src = document.getElementById("imgPreview").src;
        img.className = "card-img-top";


        //Texto
        let div3 = document.createElement("div");
        div3.className = "card-body";
        let h4 = document.createElement("h4");
        h4.className = "card-title";
        h4.textContent = nombre.value;

        let div4 = document.createElement("div");
        div4.className = "card-footer";
        let small = document.createElement("small");
        let span = document.createElement("span");
        span.className = "float-right";
        span.textContent = precio.value;
        small.className = "text-muted";
        small.textContent = fecha.value;



        let divtodo = document.getElementById("eventsContainer");

       
        divtodo.appendChild(img);
        divtodo.append(h4);
        divtodo.append(small);
        divtodo.append(span);
        
       
        //divtodo.append(div);

        //let p = document.createElement("p");



    }










});


document.getElementById('image').addEventListener("change", (event) => {


    let file = document.getElementById('image').files[0];
    let reader = new FileReader();

    reader.addEventListener("load", (e) => {

        document.getElementById("imgPreview").src = reader.result;

    });

    reader.readAsDataURL(file);

    function crearTabla() {
        let contenedor = document.createElement("div");
        let tabla = document.createElement("table");
        let tr = document.createElement("tr");

        //Imagen
        let div = document.createElement("div");
        div.className = "card";
        let img = document.createElement("img");
        img.src = document.getElementById("image").value;
        img.className = "card-img-top";


        //Texto
        let div2 = document.createElement("div");
        div2.className = "card-body";
        let h4 = document.createElement("h4");
        h4.className = "card-title";
        //let p = document.createElement("p");




    }

});


