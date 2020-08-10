import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <p>Hola mundo desde app.component</p>
    <app-clases></app-clases>
    <br>
    <h3>Directivas personalizadas</h3>
    <hr>
    <p [appResaltado]="'orange'">Hola mundo</p>
    <br>
    <h3>app-ng-switch</h3>
    <hr>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
