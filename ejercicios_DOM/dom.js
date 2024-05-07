//ejercicio 1 

let medida = document.getElementById("medida")
let peso = document.getElementById("peso")
let imcEtiqueta = document.getElementById("imc")
let calcular = document.getElementById("calcular")


calcular.addEventListener("click", function () {
    let imc = peso.value / (medida.value * medida.value)
    imcEtiqueta.value= imc


})

//ejercicio 2 
//Crear una aplicación de conversion de divisa.

