console.log(this)

let o = {
    nombre : 'Pepe',
    saludar : function () {console.log(
//        'Hola soy' + this.name
        `Hola soy ${this.nombre}`
    )},
    saludarA : function () {
        console.log(() => {console.log(`Hola soy ${this.nombre}`)})
    }
}

//setTimeout(o.saludar, 1000)
setTimeout(o.saludar.bind(o), 1000)
setTimeout(o.saludarA, 1000)

let o6 = {
    nombre : 'Pepe',
    saludar : () => {console.log(
//        'Hola soy' + this.name
        `Hola soy ${this.nombre}`
    )}
}

setTimeout(o6.saludar.bind(o6), 1000)
