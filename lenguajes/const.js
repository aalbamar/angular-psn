const x = 23
//x = 50

//const Permite tipear el lenguaje al no poder modificar arrays, objetos, ni funciones.
const aDatos = [1, 2, 3] // La referencia al array es constante, pero no su contenido.
aDatos.push(4)
console.log(aDatos)
//aDatos = [1, 2, 3, 4]

function algo () {
    console.log('Algo')
}

// const algo = function () {
//     console.log('Algo')
// }

//algo = 6
console.log(algo)

