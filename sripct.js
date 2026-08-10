//Contacto
const nombre_form = document.getElementById("nombre");
const apellido_form= document.getElementById("apellido");
const edad_form= document.getElementById("edad");
const comentario_form= document.getElementById("comentario");

const turnos_div = document.getElementById("turnos");


function guardar(){
    const nombre = nombre_form.value;
    const apellido = apellido_form.value;
    const edad = edad_form.value;
    const comentario = comentario_form.value;

if (!nombre || !apellido) {
        alert("Por favor completa al menos tu nombre y apellido.");
        nombre=""
        apellido=""
        edad=""
        comentario=""

}


    turnos_div.innerHTML += "Nombre: " + nombre + "<br>Apellido: " + apellido + "<br>Edad:" + edad + "<br>Comentario:"  + comentario ;

}   