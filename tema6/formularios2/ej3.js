let form = document.getElementById('form');

form.addEventListener('submit', function(event) {

    event.preventDefault();
    
    let dni = document.getElementById('dni');

    let expresion = /^\d{8}[A-Z]$/;
});