import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'psn-saludo-local',
  templateUrl: './saludo-local.component.html',
//  template: '<h1>Hola</h1>',
  styleUrls: ['./saludo-local.component.css']
 // styles: ['h1 {color: blue;}']
})
export class SaludoLocalComponent implements OnInit {
  @ViewChild('locName') name: ElementRef;

  constructor() { }

  ngOnInit() {
    console.dir(this.name);
  }

}
