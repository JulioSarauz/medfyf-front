import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { publicacionInterface } from 'src/app/constantes/INTERFACES';
import { PublicacionesService } from 'src/app/servicios/rest/publicaciones.service';

@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.scss']
})
export class DynamicDialogComponent implements OnDestroy{
  autor:string="";
  idPublicacion:string="";
  publicacion:string="";
  tipoModal: number = 0;

  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    public dialogService: DialogService, 
    public messageService: MessageService,
    private readonly _publicacionServ:PublicacionesService
  ) { 

    if(this.config.data!== undefined){
      this.tipoModal = this.config.data.tipoModal;
      this.autor = this.config.data.autor;
      this.publicacion = this.config.data.publicacion;
      this.idPublicacion = this.config.data.id;
     
    }
    
  }


    ngOnDestroy() {
      if (this.ref) {
          this.ref.close();
      }
  }


  guardarPublicacion(){
  const datosPublicacion:publicacionInterface = {
    autor:this.autor,
    publicacion: this.publicacion
  }

    this._publicacionServ.guardarPublicacion(datosPublicacion).subscribe((almacenado)=>{
        window.location.reload();
        this.ref.close();
      
    });
  }

  actualizarPublicacion(){
    const datosPublicacion:publicacionInterface = {
      autor:this.autor,
      publicacion: this.publicacion
    }
    
      this._publicacionServ.actualizarPublicacion(this.idPublicacion,datosPublicacion).subscribe(actualizado=>{
        console.log(actualizado);
        window.location.reload();
        this.ref.close();
      });
    }
  

}
