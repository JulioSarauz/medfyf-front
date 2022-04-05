import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/rest/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario:string="";
  clave:string="";

  constructor(
    private readonly _loginServ:LoginService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }
  

  ingresoUsuario(){
    const data:any={
      user:this.usuario,
      clave:this.clave
    }
    this._loginServ.ingresoSistema(data).subscribe(ingreso=>{
      if(ingreso!== null){
        localStorage.setItem("sesion","1");
        this._router.navigate(["admin"]);
      }    
    });
    
  }
}
