import { Component, OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, 
  AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';

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
export class HomeComponent implements OnInit{
@Input() miparametro:string;
  constructor() { console.log('constructor'); }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  // OnChanges(): void{
    
  // }
  // DoCheck():void{
  //   console.log('DoCheck');
  // }
  // AfterContentInit():void{
  //   console.log('AfterContentInit');
  // }
  // AfterContentChecked():void {
    
  // }
  // AfterViewInit():void{
  //   console.log('AfterViewInit');
  // }
  // AfterViewChecked():void{
  //   console.log('AfterViewChecked');
  // }
  // OnDestroy():void{
  //   console.log('OnDestroy');
  // }
  
  

}
