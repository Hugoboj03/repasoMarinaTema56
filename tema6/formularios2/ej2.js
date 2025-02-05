let form = document.getElementById('form');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    let fallo = document.getElementById('fallo');

    let edad = document.getElementById('edad').value;

    let expresion = /^\d+$/;

    if(expresion.test(edad)){
        let edadInt = parseInt(edad);

        if(edadInt >= 0 && edadInt <= 105){
            fallo.innerHTML = "Edad correcta introducida";
        }else{
            fallo.innerHTML = "Edad incorrecta. Debe ser un número entero entre 0 y 105";
        }
    }else{
        fallo.innerHTML = "Edad incorrecta. Debe ser un número entero entre 0 y 105";
    }
});