import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {
  private segmento = 'usuarios';
  private url = `${environment.host}:${environment.port}`
  constructor(
    private readonly _http:HttpClient
  ) { }

  ingresoSistema(data:any){
    const path="ingreso-usuarios";
    const uri = `${this.url}/${this.segmento}/${path}?user=${data.user}&clave=${data.clave}`;
    return this._http.get(uri);
  }

}
