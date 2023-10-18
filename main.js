// SEGUNDA PRE-ENTREGA JAVASCRIPT / SIMULADOR INTERACTIVO


// Este es un simulador interactivo de un Club de Natacion. 


// En primer lugar, se le solicita al socio del club que ingrese la clave del club para ingresar:

let contrasenia = "1234"
let contraseniaIngresada = prompt("Ingrese clave para ingresar al Club")

if (contraseniaIngresada == contrasenia) {
    console.log("Acceso correcto")
} else {
    console.log("Acceso denegado")
}

// A continuacion, se le pide al socio que elija la piscina a entrenar:

let piscina = prompt(`Elija la piscina para entrenar:
1: Sirena
2: Tiburon
3: Corales
`)

switch (piscina) {
    case "1":
        console.log("Elegiste entrenar en Sirena")
        break;
    case "2":
        console.log("Elegiste entrenar en Tiburon")
        break;
    case "3":
        console.log("Elejiste entrenar en Batman")
        break;
    default:
        console.log("Elija una alternativa valida")
        break;
}

//Luego, se le pide al socio que ingrese frase motivadora para que se reproduzca en las pantallas de Club:

let entrada = prompt("Ingrese frases motivadoras, las mismas se veran en las pantallas, al finalizar escriba FIN")
let texto = ""

while (entrada != "FIN" && entrada != "fin") {
    texto += entrada + " "
    entrada = prompt("Ingrese frases motivadoras, la mismas se veran en las pantallas, al finalizar escriba FIN")
}

alert(texto)

// A contunuacion, se hace una funcion para que el personal del club ingrese su nombre:

function solicitarNombre() {
    let nombre = prompt("Ingrese su nombre")
    console.log(`Bienvenido ${nombre}`)
}

solicitarNombre()

// A continuacion se hace Class y function para altas de nuevos clientes:

class Cliente {
    constructor(nombre, acceso) {
        this.nombre = nombre
        this.acceso = acceso
        this.alta = function () {
            console.log("Alta, de " + this.nombre)
        }
    }
}
const lucasGarcia = new Cliente("Lucas Garcia", "Aceptado")
const yohanaRollino = new Cliente("Yohana Rollino", "Aceptado")
const luisinaPautasso = new Cliente("Luisina Pautasso", "Aceptado")
const IgancioCoria = new Cliente("Ignacio Coria", "Aceptado")

lucasGarcia.alta()

//A continuacion tengo un Array de objetos para registrar los turnos de 1 hora de los clientes que ingresan a la
//piscina:

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

ingreso.push(primerIngreso)
ingreso.push(segundoIngreso)
ingreso.push(tercerIngreso)

//Una vez que se van cumpliendo los turnos, se van eliminando los primeros clientes que ingresaron, con un SHIFT:

ingreso.shift()
console.log(ingreso)

// A continuacion, mediante un FOR EACH, me arroja una lista de todos los socios:

const listaSocios = ["juan", "belen", "ignacio", "Lucas"]

listaSocios.forEach((p, i) => {
    console.log(`${i}: ${p}`)
})

// A continuacion, filtro por los soscios con una edad superior a 20:

const datos = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Carla", edad: 19 },
    { nombre: "Jose", edad: 18 }
]

let resultado = datos.filter((n) => n.edad >= 20)

console.log(resultado)