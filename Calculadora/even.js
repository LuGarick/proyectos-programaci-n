'use strict'
// Variables numeros
const numeros = document.querySelectorAll(".numbers");
//Variables signos
const signos = document.querySelectorAll(".signals");
//pantalla
let pantalla = document.querySelector('.monitor')

let valor1;
let agrupacion ="";
let transformar = 0;
numeros.forEach(elemento => {
    elemento.addEventListener('click', () =>{
        valor1 = parseInt(elemento.value);
        console.log(valor1);
        agrupacion += String(valor1);
        transformar = parseInt(agrupacion);
        pantalla.value = agrupacion
    })
})

