import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dockItems: any[] = [];
  constructor(
    private readonly _router:Router
  ) { }

  ngOnInit(): void {

    

  }

  abrirHojaVida(){
    
    window.open("./../../../assets/docs/CURRÍCULUM VITAE EVELYN SARÁUZ .pdf","hoja de vida");
  }

}
