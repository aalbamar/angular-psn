import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'psn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  logo: string;
  time: Observable<Date>;

  constructor() { }

  ngOnInit() {
    this.title = 'Angular PSN';
    this.logo = '../assets/logo.svg'
    this.time = new Observable<Date>((observer: Observer<Date>) => {
      setInterval(() => observer.next(new Date()), 1000);
    })
  }

}
