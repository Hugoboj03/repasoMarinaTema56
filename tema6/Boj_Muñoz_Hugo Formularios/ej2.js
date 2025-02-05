let form = document.getElementById('form');

form.addEventListener('submit', function(event) {

    //Usamos el preventDefault para evitar que desaparezcan los datos una vez le damos a enviar
    event.preventDefault();

    //Obtenemos el valor del input y lo pasamos a entero para comparar
    let edad = document.getElementById("edad").value
    
    let edadInt = parseInt(edad);

    //Comparamos si cumple los requisitos
    if(edadInt < 0 || edadInt > 105){

        document.getElementById("fallo").innerHTML = "La edad tiene que estar entre 0 y 105 años";
        console.log("La edad tiene que estar entre 0 y 105 años");
    }else{
        document.getElementById("fallo").innerHTML = "Edad valida";
    }


});