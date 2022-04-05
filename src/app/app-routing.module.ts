import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './rutas/admin/admin.component';
import { ExplorarComponent } from './rutas/explorar/explorar.component';
import { HomeComponent } from './rutas/home/home.component';
import { LoginComponent } from './rutas/login/login.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component:HomeComponent
  },{
    path:'explorar',
    component:ExplorarComponent
  },
  {
    path:'logeo',
    component:LoginComponent
  },
  {
    path:'admin',
    component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
