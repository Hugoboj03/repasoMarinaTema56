
let form = document.getElementById('form');


form.addEventListener("submit", function (event) {
    let fallo = "";

    //Usamos el preventDefault para evitar que desaparezcan los datos una vez le damos a enviar
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;


    //Iniciamos los colores de los border
    document.getElementById("nombre").style.border = "";
    
    document.getElementById("apellidos").style.border = "";
    





    //Dependiendo del tipo de error imprimiremos un fallo distinto
    if (/\d+/.test(nombre) && /\d+/.test(apellidos)) {

        fallo = "El nombre y apellido no puede contener numeros";

        console.log(fallo);
        
        apellidos.valid = false;

        document.getElementById("nombre").style.border = "2px solid red";
        document.getElementById("apellidos").style.border = "2px solid red";

    } else if (/\d+/.test(nombre)) {

        fallo = "El nombre no puede contener numeros";

        console.log(fallo);
        
        document.getElementById("nombre").style.border = "2px solid red";


    } else if (/\d+/.test(apellidos)) {

        fallo = "El apellido no puede contener numeros";

        console.log(fallo);
        
        document.getElementById("apellidos").style.border = "2px solid red";


    }


    //Si hay fallos se colorearan los inputs y se imprimirá el mensaje

    if (fallo !== "") {


        console.log(fallo);
        document.getElementById("fallo").innerHTML = fallo;
    } else {

        console.log("Bien");
        document.getElementById("fallo").innerHTML = "bien";
    }

});



