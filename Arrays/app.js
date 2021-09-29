//1) a) Solicitar al usuario que ingrese 5 nombres de frutas y almacenarlos en un array.

var s
var frutas = [
]

for(i=0 ; i<5; i++){
    s = prompt("Ingrese una fruta, owo")
    frutas.push(s)    
}

console.log(frutas)

//b) Ahora, solicitar al usuario que ingrese otros nombres de frutas, la cantidad que desee, sin pedirle de antemano cuál será la cantidad a ingresar.

var frutas2 = [
]
var confirma

do { 
    s = prompt("Ingrese otra fruta por favor, owo")
    frutas2.push(s)
    confirma = confirm('¿Desea ingresar más frutas?')
} while( confirma === true)

console.log(frutas2)
// Agregar un condicional para no agregar frutas repetidas y soluciona el problema de null owo

//c) Concatenar ambos arrays y mostrarlo de dos formas diferentes: Con las 5 frutas al principio, y con las 5 frutas al final.

const frutasas = frutas.concat(frutas2);
console.log(frutasas);

//2)
