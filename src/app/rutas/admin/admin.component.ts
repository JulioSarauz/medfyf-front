import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogComponent } from 'src/app/componentes/dynamic-dialog/dynamic-dialog.component';
import { publicacionInterface } from 'src/app/constantes/INTERFACES';
import { PublicacionesService } from 'src/app/servicios/rest/publicaciones.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sesion: string | null = "0";
  ref: DynamicDialogRef | undefined;
  publicaciones: publicacionInterface[]=[];

  constructor(
    private readonly primengConfig: PrimeNGConfig,
    private readonly _publiServ: PublicacionesService,
    public dialogService: DialogService,
    private readonly _router:Router

  
  ) { }

  ngOnInit(): void {
    this.sesion = localStorage.getItem("sesion");
    if(this.sesion === "1"){
      this.primengConfig.ripple = true;
      this._publiServ.obtenerPulicaciones().subscribe(publicaciones => {
     
        this.publicaciones = JSON.parse(JSON.stringify(publicaciones)); 
      });
    }else{
      this._router.navigate(["home"]);
    }
    
  }


  show() {
    this.ref = this.dialogService.open(DynamicDialogComponent, {
      data:{
        tipoModal:0
      },
      header: "Nueva Publicación",
      baseZIndex: 10000
  });
  }

  Actualizar(id:string,autor:string,publicacion:string) {
    this.ref = this.dialogService.open(DynamicDialogComponent, {
      data:{
        tipoModal:1,
        id:id,
        autor:autor,
        publicacion:publicacion
      },
      header: "Actualizar Publicación",
      baseZIndex: 10000
  });
  }

  Eliminar(id:string){
    Swal.fire({
      title: 'Seguro que desea eliminar?',
      text: "La publicación no se podrá recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:"Cancelar",
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
      
        this._publiServ.eliminarPublicacion(id).subscribe(eliminado=>{
          window.location.reload();
          Swal.fire(
            'Eliminado!',
            'Tu publicación a sido eliminada.',
            'success'
          )
        });
      }
    })
  }

}
