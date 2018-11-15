import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psn-saludo',
  templateUrl: './saludo.component.html',
//  template: '<h1>Hola</h1>',
  styleUrls: ['./saludo.component.css']
 // styles: ['h1 {color: blue;}']
})
export class SaludoComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Pepe';
  }

  onBorrar(ev) {
    this.name = '';
    console.dir(ev);
  }

}
