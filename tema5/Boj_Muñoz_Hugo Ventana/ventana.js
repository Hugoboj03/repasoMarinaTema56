'use strict';


function abrir() {
    window.open("https://lapalabradeldia.com/", 'torrevigia', "width=500, height=200, location=no, menubar=no, left=100, top=200");
}

console.log("URL" + window.location.href);


console.log('Protocolo: ' + window.location.protocol +
    'Hostname: ' + window.location.hostname +
    'Puerto: ' + window.location.port);

const boton = document.getElementById("boton");
btnGoogle.addEventListener("click", e => window.location.assign("https://lapalabradeldia.com/"));
window.confirm("Hola: Acepta para recargar o Cancela para imprimir") ? window.location.reload() : window.print();

console.log(navigator.userAgent);
navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitud: " + position.coords.latitude + ", Longitud: " + position.coords.longitude);
});

console.log(screen.width + " - " + screen.height); // Ancho de pantalla y alto (Resolución)
console.log(screen.availWidth + " - " + screen.availHeight); 