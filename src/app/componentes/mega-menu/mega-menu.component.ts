import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MegaMenuItem,MenuItem} from 'primeng/api';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent implements OnInit {
  items: any[] = [];
  constructor(
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
    this.items = [
      { 
          label: 'Inicio', icon: 'pi pi-fw pi-home', command: () => this.redirigirInicio()
      },
      {
          label: 'Explorar', icon: 'pi pi-fw pi-clock', command: () => this.redirigirExplorar()
      },
      {
          label: 'Configuración', icon: 'pi pi-fw pi-cog',
          items: [
            [
              {
                label:"Ingreso Sistema",
                items:[{label:"Iniciar Sesión", icon: 'pi pi-fw pi-user', command: () => this.redirigirInicioSesion() }]
              }
            ]
                
            
            
          ]
      }
  ]
  }


  redirigirInicio(){
    this._router.navigate(['home']);
  }

  redirigirExplorar(){
    this._router.navigate(['explorar']);
  }

  redirigirInicioSesion(){
    this._router.navigate(['logeo']);
  }
}
