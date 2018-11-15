class Persona {
    public nombre: string; //El ambito, tipo y ; son opcionales
    private edad: number;

    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar () {
        console.log(`Hola soy ${this.nombre}`)
    }
}

class Alumno extends Persona {
    curso: string;
    constructor(nombre, edad, curso) {
        super(nombre, edad)
        this.curso = curso
    }

    saludar () {
        super.saludar()
        console.log(`Hola soy del curso ${this.curso}`)
    }
}

let p1 = new Persona('Pepe', 33)
p1.saludar()
// p1.profesor = "Programador"
// console.log(p1)


let a1 = new Alumno('Juan', 34, 'Angular')
console.log(a1)

//Forma abreviada
class Persona2 {
    constructor(public nombre: string, private edad: number) {}

    saludar(): void {
        console.log(`Hola soy ${this.nombre}`)
    }
}

let p2 = new Persona('Pepe2', 23)
p2.saludar()


interface PersonaIf { //Ambito público por defecto
    nombre: string;
    apellidos: string;
}

class PersonaImpl implements PersonaIf {
    constructor(
 //       algo: any,
        public nombre: string,
        public apellidos: string,
        private edad: number,
        isCasado: boolean,
        aficiones: Array<string>,
//        trabajos: [any],
        otrosDatos: object,
//        otrosDatos: {},
    ) {}

    saludar(): void {
        console.log(`Hola soy ${this.nombre}`)
    }
}

class Alumno2 extends PersonaImpl {
    curso: string;
    constructor(nombre, apellidos, edad, isCasado, aficiones, otrosDatos, curso) {
        super(nombre, apellidos, edad, isCasado, aficiones, otrosDatos)
        this.curso = curso
    }

    saludar () {
        super.saludar()
        console.log(`Hola soy del curso ${this.curso}`)
    }
}

let a2 = new Alumno2('Pepe', 'Gimenez', 33, true, ['conducir', 'dormir'], null, 'angular')
a2.saludar()

