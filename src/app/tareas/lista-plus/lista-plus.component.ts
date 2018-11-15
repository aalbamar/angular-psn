import { Component, OnInit } from '@angular/core';
import { TareaIf, Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'psn-lista-plus',
  templateUrl: './lista-plus.component.html',
  styleUrls: ['./lista-plus.component.css']
})
export class ListaPlusComponent implements OnInit {
  aTareas: Array<TareaIf>;
  tarea: TareaIf;

  constructor() { }

  ngOnInit() {
    this.aTareas = [];
    this.tarea = new Tarea();
  }

  addTarea(newTarea: TareaIf) {
    console.log("Desde el padre");
    console.log(newTarea);
    let tareaClon = Object.assign({}, newTarea);
    this.aTareas.push(tareaClon);
  }

  deleteTarea(index: number) {
    this.aTareas.splice(index, 1);
  }

  changeState(index: number) {
    this.aTareas[index].isCompleted = !this.aTareas[index].isCompleted;
    console.log(this.aTareas);
  }
}
