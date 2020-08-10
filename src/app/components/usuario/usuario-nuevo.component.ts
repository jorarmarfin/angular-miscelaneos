import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private activatedrouter:ActivatedRoute) { 
    this.activatedrouter.parent.params.subscribe(parametros =>{
      console.log('Ruta hijo');
      console.log(parametros);
    })
  }

  ngOnInit(): void {
  }

}
