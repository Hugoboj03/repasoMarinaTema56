let form = document.getElementById('form');

form.addEventListener('submit', function(event) {

    //Usamos el preventDefault para evitar que desaparezcan los datos una vez le damos a enviar
    event.preventDefault();

    let fecha = document.getElementById("fecha").value;

    let expresionFecha = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
    
    

    if(!expresionFecha.test(fecha)){
        document.getElementById("fallo").innerHTML = "La fecha no es válida";
        
        
    }else{
        document.getElementById("fallo").innerHTML = "Fecha valida";
    }


});