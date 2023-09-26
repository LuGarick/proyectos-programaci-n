'use strict'
// Variables numeros
const numeros = document.querySelectorAll(".numbers");
//Variables signos
const signos = document.querySelectorAll(".signals");
//pantalla
let pantalla = document.querySelector('.monitor');
let borrar = document.querySelector(".reset");
let resultado = document.querySelector(".resultado");
let operador;
let digito1 = 0;
let digito2 = 0;
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

borrar.addEventListener('click', () =>{
    
    pantalla.value = '';
    agrupacion = '';
    transformar = undefined;
})

signos.forEach(elemento =>{
    elemento.addEventListener('click', () =>{
        operador = elemento.value
        if(digito1 = 0){
            digito1 = transformar;
        }

    })
} )
