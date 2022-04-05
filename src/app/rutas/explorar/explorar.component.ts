import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FECHA_ACTUAL } from 'src/app/constantes/FUNCIONES';
import { publicacionInterface } from 'src/app/constantes/INTERFACES';
import { PublicacionesService } from 'src/app/servicios/rest/publicaciones.service';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.scss']
})
export class ExplorarComponent implements OnInit {

 publicaciones: publicacionInterface[]=[];
 fecha:string="";
  constructor(
    private primengConfig: PrimeNGConfig,
    private readonly _publiServ: PublicacionesService,
  ) { }

  ngOnInit(): void {
    this.fecha=FECHA_ACTUAL;
    this.primengConfig.ripple = true;
  this._publiServ.obtenerPulicaciones().subscribe(publicaciones => {
     
        this.publicaciones = JSON.parse(JSON.stringify(publicaciones)); 
      });   
  }

}


export class ModelComponent {

  val: number = 0;

}