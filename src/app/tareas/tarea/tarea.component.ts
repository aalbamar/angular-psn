import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TareaIf } from 'src/app/models/tarea.model';

@Component({
  selector: 'psn-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Output() evBorrar: EventEmitter<number>; // Output propaga el evento al componente padre .
  @Output() evCompletar: EventEmitter<number>;
  @Input() tarea: TareaIf;
  @Input() index: number;

  constructor() {
    this.evBorrar = new EventEmitter();
    this.evCompletar = new EventEmitter();
  }

  ngOnInit() {
    this.tarea = Object.assign({}, this.tarea);
  }

  sendBorrar() {
    this.evBorrar.emit(this.index);
  }

  sendChange() {
    this.evCompletar.emit(this.index);
  }

}
