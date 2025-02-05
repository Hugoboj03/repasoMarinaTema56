"use strict";



let form = document.getElementById("newEvent");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let inputs = document.querySelectorAll("input");

    let inputsValidos = true;

    inputs.forEach(input => {
        if (input.value == "") {
            input.classList.add("is-invalid");
            input.classList.remove("valid");
            inputsValidos = false;
        } else {
            input.classList.remove("is-invalid");
            input.classList.add("valid");
        }
    })


    if (inputsValidos) {
        // Crear los elementos de la card
        let card = document.createElement("div");
        card.classList.add("card");

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let cardTitle = document.createElement("h5");
        cardTitle.textContent = inputs[0].value;  // Usar el valor del primer input como título de la card

        let cardText = document.createElement("p");
        cardText.textContent = inputs[1].value;  // Usar el valor del segundo input como texto de la card

        let descripcion = document.createElement("p");
        descripcion.textContent = inputs[2].value; // Descripción

        // Agregar el título, texto y descripción a la card
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(descripcion);

        // Añadir imagen si se seleccionó
        let imageInput = document.getElementById("image");  // Accedemos directamente por el ID del input de imagen
        if (imageInput.files && imageInput.files[0]) {
            let img = document.createElement("img");
            
            img.src = URL.createObjectURL(imageInput.files[0]);  // Crear una URL local para la imagen seleccionada
            card.appendChild(img);  // Agregar la imagen en la parte superior de la card
        }

        card.appendChild(cardBody);

        // Agregar la card al contenedor de eventos
        let eventsContainer = document.getElementById("eventsContainer");
        eventsContainer.appendChild(card);

        // Limpiar el formulario después de agregar el evento
        form.reset();




    }



});

