/*Las funciones que realiza la web son las de registrar socios y mostrarlos en una lista de socios.
Lo ideal sería que la función comprobara si el socio ya existe y en ese caso mostrar un error pero sería mecesaria la conexión a una bbdd,
no tenemos conocimientos aún para eso*/
/*La plaicación consiste en añadir una nueva fila a la tabla de socios con los datos introducidos en el formulario*/

/*Capturamos la tabla donde queremos añadir los datos y el boton que realizará la función*/
let tabla = document.getElementById("listado");
let boton = document.getElementById("enviar");

/*Esta función añadirá un número de socio al nuevo socio introducido*/
function addNumSocio (){
    let numSocio = tabla.getElementsByTagName("tr").length;
    return numSocio;
}

/*La función se ejecutará en el momento de hacer click en el botón "enviar"*/
boton.addEventListener("click", ()=>{
/*Capturamos los campos donde se introducirán los nuevos datos y los asignamos a nuevas variables*/    
let nombre = document.getElementById("nm");
let dni = document.getElementById("dn");
let fecha = document.getElementById("fch");
let direccion = document.getElementById("drc");
//let socio = document.getElementById("sco");
/*Creamos la nueva fila con sus correspondientes celdas las asignamos a nuevas variables*/
let fila1 = document.createElement("tr");
let celdaNombre = document.createElement("td");
let celdaDni = document.createElement("td");
let celdaFecha = document.createElement("td");
let celdaSocio = document.createElement("td");
let celdaDireccion = document.createElement("td");
/*Capturamos el valor de los campos introducidos en el formulario y se los asignamos a cada celda nueva creada*/
celdaNombre.textContent = nombre.value;
celdaDni.textContent = dni.value;
celdaFecha.textContent = fecha.value;
celdaDireccion.textContent = direccion.value;
celdaSocio.textContent = addNumSocio();

/*A la nueva fila creada añadimos los campos anteriores*/
fila1.appendChild(celdaNombre);
fila1.appendChild(celdaDni);
fila1.appendChild(celdaFecha);
fila1.appendChild(celdaDireccion);
fila1.appendChild(celdaSocio);
/*A nuestra tabla capturada al principio añadimos la nueva fila*/
tabla.appendChild(fila1);

});

