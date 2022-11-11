
 
 console.log("BIENVENIDO A LA EVALUACIÓN DE JAVASCRIPT!!!");

function mainFunction() {
   
    printText();
    updateHeader();
}

function printText() {

    var contenido = document.getElementById("txtDatos").value;

    if (contenido.length == 0) {
        alert("Ups! Nada que mostrar");
    } else {
        alert(contenido);
    }

    document.getElementById("txtDatos").value = "";

}

function updateHeader() {

    var contenido = document.getElementById("header3");
    contenido.style.backgroundColor = '#FFF';
    contenido.innerHTML = "CABECERA ACTUALIZADA";

}