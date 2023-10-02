// PRIMER PRE-ENTREGA JAVASCRIPT / SIMULADOR INTERACTIVO


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

//Por ultimo, se le pide al socio que ingrese frase motivadora para que se reproduzca en las pantallas de Club:

let entrada = prompt("Ingrese frases motivadoras, las mismas se veran en las pantallas, al finalizar escriba FIN")
let texto = ""

while (entrada != "FIN" && entrada != "fin") {
    texto += entrada + " "
    entrada = prompt("Ingrese frases motivadoras, la mismas se veran en las pantallas, al finalizar escriba FIN")
}

alert(texto)