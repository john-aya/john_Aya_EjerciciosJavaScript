
console.log("-------------ejercicio 1----------------");

let cifra = parseInt(prompt("ingrese un numero"))
for (let i = 1; i<=10; i++){
    let resultado = cifra * i;
    console.log(cifra + "X" +i + "=" + resultado);
}

console.log("-------------ejercicio 2-------------");
//2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

let numero = parseInt(prompt("ingrese un numero"))
let cifra2 = numero

while (numero !=0) {
    numero = parseInt(prompt("ingresa otro numero"))
    cifra2 += numero
}
console.log(cifra2);

console.log("-------------ejercicio 3----------------");

    let numeroSecreto = 66
    let numerosa100;
intentos=0
    do {
        numerosa100 = parseInt(prompt("ingrese un numero de 1 a 100"))
        if (numerosa100<numeroSecreto) {
        console.log("el numero a adivinar es mayor")    
        }else if (numerosa100>numeroSecreto) {
         console.log("el numero a adivinar es menor");   
        }
intentos++
        
    } while (numerosa100 != numeroSecreto);

console.log("lo lograste");
console.log("intentos realizados:" + intentos)


console.log("-------------ejercicio 4----------------");

//4. Realizar un programa que permita decir si un numero es primo. Un numero es primo si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo. Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene como divisores 1, 2, 5, 10


let numeroDivisible = parseInt(prompt("ingresa un numero para comprobar si es primo"))
let i=1
let cuenta= 0

while (i<=numeroDivisible) {
    if(numeroDivisible%i==0){
        cuenta++;
        console.log("es divisor de:"+i);
    }
    i++;
}
if(cuenta>2){
    console.log("este numero no es primo");
}else{
    console.log("este numero  es primo");
}

console.log("-------------ejercicio 5----------------");

//Realizar un programa que permita dado un numero, mostrar todos sus divisores.

let numeroDiv = parseInt(prompt("ingresa el numero a verificar sus divisores"))

let ix=1
let muestra =0

while (ix<=numeroDiv) {
    if(numeroDiv%ix==0){
        muestra++;
        console.log("es divisor de:"+ix);
    }
    ix++;
}


console.log("-------------ejercicio 6----------------");

//Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array

let deportes = ["futbol","futsal", "ciclismo", "natacion", "voleyball", "atletismo", "boxeo", "basquetball", "beisbol", "tenis"]


for (let i = 0; i<deportes.length; i++)
console.log("es un deporte: "+ deportes[i])

console.log("-----------ejercicio 7--------------");

//Dado un array de 10 numeros, realizar un programa que muestre por consola el doble de cada uno de los elementos.

let inf= [2,4,6,8,10,12,14,16,18,20]
let infoNumeros;

for (let i = 0; i <= inf.length; i++) {
    if (infoNumeros=  inf[i]) {
        console.log("para el numero " + inf[i]+ ", su doble es:")
        console.log(infoNumeros*2);  
    }
    }

    console.log("-----------ejercicio 8--------------");

//Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentacion por cada elemento del array

let padre = {
    nombre: "Luis",
    edad: 71,
    ocupacion: "agricultor",
    lugar: "Icononzo"
}

let madre ={
    nombre: "Amparo",
    edad: 69,
    ocupacion: "Pensionada",
    lugar: "Icononzo"
}

let hijo = {
    nombre: "John",
    edad: 39,
    ocupacion: "Domiciliario",
    lugar: "Ibague",
}
let tio = {
    nombre: "Pedro",
    edad: 56,
    ocupacion: "Latonero",
    lugar: "Bogota D.C."
} 
let abuelo = {
    nombre: "Alfonso",
    edad: 92,
    ocupacion: "Fallecido",
    lugar: "Icononzo"
} 

let familia = [padre, madre, hijo, tio, abuelo];

let miFamilia= familia


for (let i = 0; i < familia.length; i++) {
  let mensaje = "Hola, me llamo " + familia[i].nombre + " soy de " + familia[i].lugar +", tengo " + familia[i].edad +" años, trabajo como "+ familia[i].ocupacion;
  console.log(mensaje);
};
       



 console.log("-----------ejercicio 9--------------");

 //Dado un array de 10 numeros, realizar un programa que recorra el array y solo muestre los numeros impares.

    let numeros8 = [1,2,3,4,5,6,7,8,9,10,11,12]

for (let i = 1; i < numeros8.length; i+=2) {
    console.log(i)
    
}

console.log("-----------ejercicio 10--------------");

//Realizar un programa que permita la entrada de numeros y calcule la suma de los numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0


    let numeroPar = 0;
    let numeroImpar = 0;
    
    while (true) {
        let numero = parseInt(prompt("Ingrese un número o anote 0 para terminar"));
        
        if (numero === 0) {
            break;
        } else if (numero % 2 === 0) {
            numeroPar += numero;
        } else {
            numeroImpar += numero;
        }
    }
    
    console.log("La suma de los números pares es: " + numeroPar);
    console.log("La suma de los números impares es: " + numeroImpar);

let numeroSuma1 = parseInt(prompt("ingrese un numero"))  
let numerosuma2 = parseInt(prompt("ingrese el numero que lo sume"))
let resultado = numeroSuma1+numerosuma2 
let par;
let impar;
console.log(resultado);

console.log("-----------ejercicio 11--------------");

// Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas grande.


let num11 = [4, 10, 44, 24, 57, 63, 35, 40, 20, 36];

let max = num11[0];

for (let i = 1; i < num11.length; i++) {
    if (num11[i] > max) {
        max = num11[i];
    }
}
console.log("El número más grande es:", max);

console.log("-----------ejercicio 12--------------")

let num12 = [10, 12, 16, 32, 7, 3, 15, 40, 11, 2];

let min = num11[0];

for (let i = 1; i < num12.length; i++) {
    if (num12[i] < min) {
        min = num12[i];
    }
}
console.log("El número más chico es: ", min);

console.log("-----------ejercicio 13--------------")
// Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo un empate. Caso contrario mostrar un mensaje con el nombre de la persona ganadora.

// Función para obtener la jugada válida de un jugador


function obtenerJugada(jugador) {

    let jugada = prompt(`[${jugador}] Ingresa: piedra, papel o tijeras): `).toLowerCase();
    while (jugada !== 'piedra' && jugada !== 'papel' && jugada !== 'tijeras') {
        console.log("Por favor, ingresa una jugada válida (piedra, papel o tijeras).");
        jugada = prompt(`[${jugador}] Ingresa tu jugada (piedra, papel o tijeras): `).toLowerCase();
    }
    return jugada;
}

// Función para determinar el ganador de una ronda
function determinarGanador(jugador1, jugador2) {
    if (jugador1 === jugador2) {
        return 'empate';
    } else if (
        (jugador1 === 'piedra' && jugador2 === 'tijeras') ||
        (jugador1 === 'papel' && jugador2 === 'piedra') ||
        (jugador1 === 'tijeras' && jugador2 === 'papel')
    ) {
        return 'jugador1';
    } else {
        return 'jugador2';
    }
}


function jugarPiedraPapelTijeras() {
    console.log("¡este es el juego de Piedra, Papel o Tijeras!");

    
    let jugador1 = prompt("Nombre del jugador 1: ");
    let jugador2 = prompt("Nombre del jugador 2: ");

    let continuarJugando = true;

    
    while (continuarJugando) {
        
        let jugadaJugador1 = obtenerJugada(jugador1);
        let jugadaJugador2 = obtenerJugada(jugador2);

        
        const resultado = determinarGanador(jugadaJugador1, jugadaJugador2);

        
        if (resultado === 'empate') {
            console.log("¡Empate! Vuelvan a intentarlo.");
        } else {
            console.log(`¡${resultado === 'jugador1' ? jugador1 : jugador2} gana esta ronda con ${resultado === 'jugador1' ? jugadaJugador1 : jugadaJugador2}!`);
            continuarJugando = false;
        }
    }
}

jugarPiedraPapelTijeras();


console.log("-----------ejercicio 14--------------")
//Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado

    for (let i = 1; i <= 5; i++) { 
        let espacio = ''; 
        for (let a = 1; a <= i; a++) { 
            espacio += '* '; 
        }
        console.log(espacio); 
    }
    console.log("-----------ejercicio 15--------------")

    for (let i = 5; i >= 1; i--) { 
        let espacio = ''; 
        for (let a = 1; a <= i; a++) { 
            espacio += '* '; 
        }
        console.log(espacio); 
    } 
    console.log("-----------ejercicio 16--------------")

    let numeros16 = [20, 12, 2, 90, 6, 80, 34, 56, 72, 38];

    for (let i = 0; i < numeros16.length - 1; i++) {
         
      for (let j = 0; j < numeros16.length - i - 1; j++) {
        if (numeros16[j] > numeros16[j + 1]) {
          let temp = numeros16[j];
    
          numeros16[j] = numeros16[j + 1];
    
          numeros16[j + 1] = temp;
        }
      }
    }
    
    console.log("numeros", numeros16);
