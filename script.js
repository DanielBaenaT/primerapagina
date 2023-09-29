//alert("Hola este es mi Javascript");
//let nombre = "Daniel";

//var nombre1 = "Daniel";
//nombre1 = "Baena";
//const nombre2 = "Daniel";

//console.log (nombre);
//console.log (nombre1);
//console.log (nombre2);

//SELECCIONAR ELEMENTOS
//let contenidoTitulo = "Nombre"

//let titulo = document.querySelector(".logo .fuente-acento")
//titulo.innerHTML = contenidoTitulo;
let sobreDe = "Sobre nosostros";
let subtitulo = document.querySelector("h2 .sobreDe .fuente-acento")
subtitulo = sobreDe;



//CONDICIONALES

//let textoTitulo = titulo.innerText;
//console.log(textoTitulo)

//if (textoTitulo == "Nombre") {
    //titulo.innerHTML = "Informatica";

//else {
    //console.log ("no secumple");
let textosubtitulo = subtitulo;
console.log(textosubtitulo)

if (textosubtitulo == "Sobre nosotros") {
    subtitulo = "Acerca de mi";
}
else {
    console.log ("No se cumple");
}

    //FUNCIONES
//let nombre = "Deiner";
let ciudad = "Medellin";
let gusto = "Peliculas";
//let parrafo = document.querySelector (".parrafo1");

function cambiarTexto (nombre, ciudad, gusto){
    let contenio = `Hola me presento, me llamo ${nombre}, naci en ${ciudad} y vivo en Bogota.
     Me gusta ver ${gusto} y jugar videogames, quiero aprender a programar.` ;

     return contenio;
}
parrafo = cambiarTexto(nombre, ciudad, gusto);

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 5) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
        // Si la validación es exitosa, puedes enviar el formulario
        formulario.submit();
      } else {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
      }
});
