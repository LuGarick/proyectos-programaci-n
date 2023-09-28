'use strict'
// Variables numeros
const numeros = document.querySelectorAll(".numbers");
//Variables signos
const signos = document.querySelectorAll(".signals");
//pantalla
let pantalla = document.querySelector('.monitor');
let borrar = document.querySelector(".reset");
let resultado = document.querySelector(".resultado");
let valorfinal = 0;
let operador, operar;
let valor1;
let agrupacion ="";
let transformar = 0;
numeros.forEach(elemento => {
    elemento.addEventListener('click', () =>{
        valor1 = parseInt(elemento.value);
        console.log(valor1);
        agrupacion += String(valor1);
        transformar = parseInt(agrupacion);
            pantalla.value += valor1
 
    })
})

borrar.addEventListener('click', () =>{
    pantalla.value = '';
    agrupacion = '';
    transformar = undefined;
    valorfinal = 0;
})

signos.forEach(elemento =>{
    elemento.addEventListener('click', () =>{
        operador = elemento.value
        pantalla.value += operador
    })
} )

resultado.addEventListener('click', () =>{
    try{
        valorfinal = eval(pantalla.value)
        pantalla.value = valorfinal
    }catch(error){
        pantalla.value = 'Error'
    }
})