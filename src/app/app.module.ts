import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { primeNgModules } from './constantes/PRIMENG-MODULOS';
import { HomeComponent } from './rutas/home/home.component';
import { MegaMenuComponent } from './componentes/mega-menu/mega-menu.component';
import { ExplorarComponent } from './rutas/explorar/explorar.component';
import { LoginComponent } from './rutas/login/login.component';
import { SERVICIOS } from './constantes/SERVICIOS';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './rutas/admin/admin.component';
import { MegaMenuVerticalComponent } from './componentes/mega-menu-vertical/mega-menu-vertical.component';
import { DynamicDialogComponent } from './componentes/dynamic-dialog/dynamic-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MegaMenuComponent,
    ExplorarComponent,
    LoginComponent,
    AdminComponent,
    MegaMenuVerticalComponent,
    DynamicDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ...primeNgModules,
    BrowserAnimationsModule,
    
  ],
  providers: [
    ...SERVICIOS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
