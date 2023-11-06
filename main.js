// TERCER PRE-ENTREGA JAVASCRIPT / SIMULADOR INTERACTIVO


// Este es un simulador interactivo de un Club de Natacion. 


// A contunuacion cambiamos el h1:

const titulo = document.querySelector("h1").textContent = "Aquario - Club de Natación"

//A continuación se elimina contenido del h2:

const subtitulo = document.querySelector("h2")
subtitulo.remove()

//A continuación se agregan elementos desde un Array. La class catalogo del div:

const catalogo = document.querySelector(".catalogo")
console.log(catalogo)

let actividades = ["Pileta con profe", "Pileta libre", "Aqua Gym", "Pileta para chicos", "Pileta tercera edad"]

for (let c of actividades) {
    let listado = document.createElement("li")
    listado.innerHTML = c
    catalogo.appendChild(listado)
}

//A continuación se aplica Eventos al form:

const formulario = document.querySelector("form")
const nombre = document.querySelector("#name")
const email = document.querySelector("#email")

formulario.addEventListener("submit", validarFormulario)

function validarFormulario(e) {
    e.preventDefault()
    console.log(`Nombre: ${nombre.value}`)
    console.log(`Email: ${email.value}`)
}

//Agregamos info al STORAGE:

const horarios = ["Temprano", "Medio dia", "Tarde", "Noche"]

const horariosStr = JSON.stringify(horarios)

localStorage.setItem("horarios", horariosStr)

// //A continuacion tengo un Array de objetos para registrar los turnos de 1 hora de los clientes que ingresan a la
// //piscina:

const ingreso = []

const primerIngreso = {
    nombre: "Juan",
    socio: 1
}

const segundoIngreso = {
    nombre: "Belen",
    socio: 2
}

const tercerIngreso = {
    nombre: "Ignacio",
    socio: 3
}

// Con AND si no hay ingresos:

ingreso.length === 0 && console.log("No hay ingresos")

// DESESTRUCTURACION para conocer el apellido de un alumno:

const dato = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
}

const { apellido } = dato
console.log(apellido)