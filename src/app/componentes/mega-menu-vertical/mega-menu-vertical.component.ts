import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mega-menu-vertical',
  templateUrl: './mega-menu-vertical.component.html',
  styleUrls: ['./mega-menu-vertical.component.scss']
})
export class MegaMenuVerticalComponent implements OnInit {
  items: any[] = [];
  constructor(
    private readonly _router:Router
  ) { }

  ngOnInit(): void {

    this.items = [
      {
          label: 'Configuración', icon: 'pi pi-fw pi-cog',
          items: [
            [
              {
                label:"Ingreso Sistema",
                items:[{label:"Cerrar Sesión", icon: 'pi pi-fw pi-times', command: () => this.redirigirCerrarSesion() }]
              }
            ]
                
            
            
          ]
      }
  ]
  }



  redirigirExplorar(){
    this._router.navigate(['admin']);
  }

  redirigirCerrarSesion(){
    localStorage.setItem("sesion","0")
    this._router.navigate(['home']);
  }



}
