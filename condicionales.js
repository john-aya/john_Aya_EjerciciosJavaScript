//ejercicio 1
console.log("--------ejercicio 1 ---------");
let number = 6

if (number < 10) {
    console.log("nececito numeros mayores de 10")
} else {
    console.log("perfecto, es mayor a 10")
}

//ejercicio 2
console.log("--------ejercicio 2 ---------");
let number2a = 12
let number2b = 13
let confirma


if (number2a === number2b) {
    console.log("cumple, es igual")
    confirma = true
} else {
    console.log("no cumple, es diferente")
    confirma = false
}
console.log("--------ejercicio 3 ---------");
//ejercicio 3

let number3a = 12
let number3b = 12
let confirma3


if (number3a > number3b) {
    console.log("cumple, porque es mayor")
    confirma3 = true
} else {
    console.log("no cumple, es diferente")
    confirma3 = false
}
if (number3a === number3b) {
    console.log("cumple, son iguales")
    confirma3 = true
}
console.log("--------ejercicio 4 ---------");
//ejercicio 4

let number4a = 3
let number4b = 6
let number4c = 4

if (number4a < number4b && number4a < number4c) {
    console.log("a es el mas chico")
}
if (number4b < number4a && number4b < number4c) {
    console.log("b es el mas chico")
}
if (number4c < number4a && number4c < number4b) {
    console.log("c es el mas chico")
}

//ejercicio 5
console.log("--------ejercicio 5 ---------");

let persona1 = {
    nombre: "pepito",
    edad: 30,
    altura: 1.80
}

let persona2 = {
    nombre: "miguelito",
    edad: 30,
    altura: 1.75
}

if (persona1.edad > persona2.edad) {
    console.log("edad 1 es mayor")
} else {
    console.log("persona 2 es mayor")
}

if (persona1.altura > persona2.altura) {
    console.log("persona 1 mas alta")
} else {
    console.log("persona 2 mas alta")
}

console.log("---------ejercicio 6--------------");
//ejericio 6 

let misDatos = {
    nombre: "john Aya",
    edad: 39,
    altura: 1.70,
    vision: 10
}

if (misDatos.edad >= 18 && misDatos.altura >= 1.50 && misDatos.vision >= 8) {
    console.log("puede conducir")
} else {
    console.log("no se puede conducir")
}
//queda pendiente como establecer el rango de vision 8-10

console.log("---------ejercicio 7--------------");
//ejercicio 7

/*let nombre7 = "john"
let pase = prompt("vip o normal")
let tieneEntrada = prompt("tiene Entrada?(si o no)")
let nombreCliente = prompt("escriba su nombre")



if (nombre7 == nombreCliente || pase === "vip") {
    console.log("tiene ingreso libre")
} else if (tieneEntrada === "si") {
    let deseaUsarEntrada = prompt("desea usar entrada? (si o no)")
    if (deseaUsarEntrada === "si") {
        console.log("bienvenido")
    }
} else {
    let deseaComprar = confirm("desea comprar una entrada? (si o no)")
    if (deseaComprar === true) {
        let dineroDisponible = parseInt(prompt("cuanto dinero tiene disponible?")) 
        if (dineroDisponible >= 1000) {
            console.log("venta exitosa");
            console.log("bienvenido")
        } else {
            console.log(
                "venta de entrada fallida"
            );
        }
    } else {
        console.log("gracias, hasta la proxima");
    }
}*/
 

console.log("------------ejercicio 8 ---------------");

//ejercicio 8

/*let numeroIncognita = 5

let numeroIngresado = parseInt(prompt("ingrese el numero"))
if (numeroIncognita == numeroIngresado) {
    alert("Felicidades: ganaste!");
} else if (numeroIngresado > numeroIncognita) {
    alert("el numero  es menor al que registraste");
} else if (numeroIngresado < numeroIncognita) {
    alert("el numero es mayor al que registraste");
}
 numeroIngresado = parseInt(prompt("ingrese el numero"))
if (numeroIncognita == numeroIngresado) {
    alert("Felicidades: ganaste!");
} else if (numeroIngresado > numeroIncognita) {
    alert("el numero es menor al que resgistraste");
} else if (numeroIngresado < numeroIncognita) {
    alert("el numero es mayor al que registraste");
}
 numeroIngresado = parseInt(prompt("ingrese el numero"))
if (numeroIncognita == numeroIngresado) {
    alert("Felicidades: ganaste!");
} else if (numeroIngresado > numeroIncognita) {
    alert("el numero es menor al que registraste");
} else if (numeroIngresado < numeroIncognita) {
    alert("el numero es mayor al que registraste");
}
numeroIngresado = parseInt(prompt("ingrese el numero"))
if (numeroIncognita == numeroIngresado) {
    alert("Felicidades: ganaste!");
}else{
    alert("Fin del juego. no se permiten mas intentos");
}*/

//ejercicio 9

console.log("------------------ejercicio 9-----------------");


/*let edad = parseInt(prompt("por favor, escriba su edad"))
let age = "age"

if (edad<=12){
    parseInt(alert("eres un pequeñin"))
    
}else if (edad<=18) {
    parseInt(alert("eres un adolescente"))
    
} else if (edad<=45) {
    parseInt(alert("eres un mayor joven"))
} else if (edad<=99) {
    parseInt(alert("eres un anciano"))
}else{(edad>=100)
parseInt(alert("esta seguro que su edad es esa?"))
}*/

console.log("------------ejercicio 10--------------");


/*let jugador1 = prompt("Jugador 1: ingrese piedra, papel o tijera") 
let jugador2 = prompt("Jugador 2: ingrese piedra, papel o tijera")

if (jugador1 === jugador2) {
    console.log("hay empate")
}else if(
(jugador1 === "piedra" && jugador2 === "tijera")||
(jugador1 === "papel" && jugador2 === "piedra")||
(jugador1 === "tijera" && jugador2 === "papel"))
{
    alert("gana el jugador 1")
}else if(
    (jugador2 === "piedra" && jugador1 === "tijera")||
(jugador2 === "papel" && jugador1 === "piedra")||
(jugador2 === "tijera" && jugador1 === "papel"))
 {
    alert("gana el jugador 2")
}else{
    alert("uno de los jugadores hace trampa")
} */

console.log("-------------------Ejercicio 11 -------------");

let colores = prompt("ingresa un color")

switch (colores) {
    case "blanco": 
    case "negro":
        console.log("falta de color");
        break;
        case "verde": 
        console.log("el color de la naturaleza"); 
        break;
        case "azul": 
        console.log("el color del agua"); 
        break;
        case "amarillo": 
        console.log("el color del sol"); 
        break;
        case "rojo": 
        console.log("el color del Fuego"); 
        break;
        case "marron": 
        case "marròn":
        console.log("el color de la tierra"); 
        break;
      
    default:
        console.log("excelente eleccion, no lo teniamos pensado");
        break;
}
console.log("-------------ejercicio 12-----------");

let numeroA = parseInt(prompt("ingrese el primer numero"));
let numeroB = parseInt(prompt("ingrese el segundo numero"))

let operacion = ("selecciona una operacion: suma, resta, multiplicacion, division")

 




