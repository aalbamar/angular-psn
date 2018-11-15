//El interfaz también se puede exportar para usar desde fuera.
export interface TareaIf {
    nombre: string;
    isCompleted: boolean;
}

export class Tarea implements TareaIf {
    // Si definimos los elementos de la clase en el constructor,
    //se requiere public para que el compilador interprete bien que estamos implementando la interfaz.
    //Igualmente se pueden definir los argumentos por defecto del constructor.
    constructor(
        public nombre: string = '',
        public isCompleted: boolean = false,
        public id?: number | string) {
    }

    // // Equivalente a la sintaxis anterior
    // constructor() {
    //     this.nombre = '';
    //     this.isCompleted = false;
    //     this.id = 1;
    // }
}