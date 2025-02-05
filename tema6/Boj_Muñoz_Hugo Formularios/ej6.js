let form = document.getElementById('form');

form.addEventListener('submit', function(event) {

    //Usamos el preventDefault para evitar que desaparezcan los datos una vez le damos a enviar
    event.preventDefault();

    let sexo = document.getElementsByName("sexo");

    let sexoSelec = Array.from(sexo).find(input => input.checked);
    //let sexoM = document.getElementsByName("sexo").checked[1];
    
    

    if(!sexoSelec){

        document.getElementById("fallo").innerHTML = "Debes de seleccionar un sexo";
        
        
    }else{
        document.getElementById("fallo").innerHTML = "fun";
        console.log(sexo);
    }


});