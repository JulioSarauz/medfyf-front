import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class PublicacionesService {
  private segmento = 'publicaciones';
  private url = `${environment.host}:${environment.port}`
  constructor(
    private readonly _http:HttpClient,
  ) { }


  obtenerPulicaciones(){
    const path="obtener-publicaciones";
    const uri = `${this.url}/${this.segmento}/${path}`;
    return this._http.get(uri);
  }

  guardarPublicacion(datosPublicacion:any){
    const path="crear-publicaciones";
    const uri = `${this.url}/${this.segmento}/${path}`;
    return this._http.post(uri,datosPublicacion);
  }

  actualizarPublicacion(id:string,datosPublicacion:any){
    const path="actualizar-publicaciones";
    const uri = `${this.url}/${this.segmento}/${path}?id=${id}`;
    return this._http.put(uri,datosPublicacion);
  }
  eliminarPublicacion(id:string){
    const path="eliminar-publicaciones";
    const uri = `${this.url}/${this.segmento}/${path}?id=${id}`;
    return this._http.delete(uri);
  }

}
