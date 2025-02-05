let form = document.getElementById('form');

form.addEventListener('submit', function(event) {

    //Usamos el preventDefault para evitar que desaparezcan los datos una vez le damos a enviar
    event.preventDefault();

    let provincia = document.getElementById("provincias").value;
    
    

    //Si no tiene valor le advertiremos
    if(provincia == ""){

        document.getElementById("fallo").innerHTML = "Debes de seleccionar una provincia";
        
        
    }else{
        document.getElementById("fallo").innerHTML = "";
    }


});