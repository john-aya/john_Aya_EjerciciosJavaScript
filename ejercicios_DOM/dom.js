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

let pesocol = document.getElementById("pesocol")
let dolar = document.getElementById("dolar")

pesocol.addEventListener("input", function() {
    let resultadoOperacion = pesocol.value*0.00026
    dolar.value = resultadoOperacion.toFixed(3)
})

dolar.addEventListener("input", function() {
    console.log(dolar.value);
    let resultadoOperacion = dolar.value*3823.69
    pesocol.value = resultadoOperacion.toFixed(3)
})



