let form = document.getElementById('form');

form.addEventListener('submit', function(event) {

    //Usamos el preventDefault para evitar que desaparezcan los datos una vez le damos a enviar
    event.preventDefault();

    let correo = document.getElementById("correo").value;

    /**
     * Expresion regular para comprobar el formato de un correo
     * Premitira texto el formato de un correo
     * Los caracteres @ y. son necesarios
     */
    let expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    

    if(!expresionCorreo.test(correo)){
        document.getElementById("fallo").innerHTML = "El correo no es valido";
        
        
    }else{
        document.getElementById("fallo").innerHTML = "Correo valido";
    }


});