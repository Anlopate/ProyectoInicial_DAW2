
let tabla = document.getElementById("listado");
let boton = document.getElementById("enviar");

function addNumSocio (){
    let numSocio = tabla.getElementsByTagName("tr").length;
    return numSocio;
}

boton.addEventListener("click", ()=>{
let nombre = document.getElementById("nm");
let dni = document.getElementById("dn");
let fecha = document.getElementById("fch");
let direccion = document.getElementById("drc");

let fila1 = document.createElement("tr");
let celdaNombre = document.createElement("td");
let celdaDni = document.createElement("td");
let celdaFecha = document.createElement("td");
let celdaSocio = document.createElement("td");
let celdaDireccion = document.createElement("td");

celdaNombre.textContent = nombre.value;
celdaDni.textContent = dni.value;
celdaFecha.textContent = fecha.value;
celdaSocio.textContent = addNumSocio();
celdaDireccion.textContent = direccion.value;

fila1.appendChild(celdaNombre);
fila1.appendChild(celdaDni);
fila1.appendChild(celdaFecha);
fila1.appendChild(celdaSocio);
fila1.appendChild(celdaDireccion);

tabla.appendChild(fila1);
e.preventDefault();
});

