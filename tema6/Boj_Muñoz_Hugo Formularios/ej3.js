let form = document.getElementById('form');

form.addEventListener('submit', function(event) {

    //Usamos el preventDefault para evitar que desaparezcan los datos una vez le damos a enviar
    event.preventDefault();

    let dni = document.getElementById("dni").value;
    
    /*
    Expresion regular para comprobar el formato de un dni
    X, Y o Z son para el dígito segundo del número de DNI
    \d{7,8} son para los 7 o 8 dígitos del número
    [A-Z] son para el dígito tercero del número de DNI
    */
    let expresionDni = /^[XYZ]?\d{7,8}-[A-Z]$/;

    if(!expresionDni.test(dni)){
        document.getElementById("fallo").innerHTML = "El DNI no es válido";
        console.log("El DNI no es válido");
        
    }else{
        document.getElementById("fallo").innerHTML = "DNI correcto";
    }


});