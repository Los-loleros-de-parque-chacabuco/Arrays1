//1) a) Solicitar al usuario que ingrese 5 nombres de frutas y almacenarlos en un array.

// var s
// var frutas = [
// ]

// for (i = 0; i < 5; i++) {
//     s = prompt("Ingrese una fruta, owo")
//     frutas.push(s)
// }

// console.log(frutas)

// //b) Ahora, solicitar al usuario que ingrese otros nombres de frutas, la cantidad que desee, sin pedirle de antemano cuál será la cantidad a ingresar.

// var frutas2 = [
// ]
// var confirma

// do {
//     s = prompt("Ingrese otra fruta por favor, owo")
//     frutas2.push(s)
//     confirma = confirm('¿Desea ingresar más frutas?')
// } while (confirma === true)

// console.log(frutas2)
// // Agregar un condicional para no agregar frutas repetidas y soluciona el problema de null owo

// //c) Concatenar ambos arrays y mostrarlo de dos formas diferentes: Con las 5 frutas al principio, y con las 5 frutas al final.

// const frutasas = frutas.concat(frutas2);
// console.log(frutasas);

//2)Crear un array con 10 nombres de ciudades, y solicitar al usuario que nos diga un número. Mostrar el nombre de la ciudad en esa posición del array.

// const ciudades = [" ", "Tokio", "Buenos Aires", "Paso del Rey", "California", "Nueva york", "Sao Pablo", "Montevideo", "Caracas", "Bogotá", "Maracaibo"]

// do{
// var posicionNumero =parseInt(prompt("Dime un número del 1 al 10 y te devuelvo una ciudad"))
// }while(posicionNumero >10 || posicionNumero <1)


// alert("La ciudad que elegiste es"+ " "+ ciudades[posicionNumero])

// 3)Utilizar el mismo array de ciudades, solicitar al usuario un número y remover esa cantidad de ciudades del array. Mostrar dos opciones: Sacando los datos desde el principio , y desde el final del array.

// const ciudades = ["Tokio", "Buenos Aires", "Paso del Rey", "California", "Nueva york", "Sao Pablo", "Montevideo", "Caracas", "Bogotá", "Maracaibo"]

// console.log(ciudades)
// var longitudDelArray= ciudades.length

// do{
// var posicionNumero =parseInt(prompt("Dime un número del 0 al 9 y te elimino una ciudad"))
// }while(posicionNumero >longitudDelArray || posicionNumero <0)

// var principioOFinal = confirm("Quieres eliminar desde el principio(Aceptar) o el final(cancelar)")

// posicionNumero += 1

// const ciudadesSinPrincipio = ciudades

// if(principioOFinal=== true){
// for (let i = 0; i < posicionNumero; i++) {
//     delete ciudadesSinPrincipio[i];
// }
// }else{
//     for (let n = 0; n < posicionNumero; n++) {
//         ciudades.shift(n);
//     }
// }

// console.log(ciudadesSinPrincipio)

// 3) Crear un array de 8 posiciones con nombres de artistas musicales y mostrar POR SEPARADO:
// ✨Su longitud
// ✨El último elemento.
// ✨Solo las posiciones pares
// ✨todos los elementos
// ✨todos los elementos menos el último 
// ✨Todos los elementos menos el primero
// ✨todos los elementos separados por “*”.
// ✨Solicitar al usuario un nuevo artista para reemplazar al último ingresado.

