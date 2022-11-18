import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { AuthGuardian } from './utils/auth-guardian';
import { ProductsComponent } from './components/products/products.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ControladminComponent } from './components/controladmin/controladmin.component';


const routes: Routes = [
  {
    path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,canActivate:[AuthGuardian]
  },
  {
    path:'registrar-usuario',
    component:RegistrarUsuarioComponent,canActivate:[AuthGuardian]
  },
  {
    path:'verificar-correo',
    component:VerificarCorreoComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'recuperar-password',
    component:RecuperarPasswordComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'paneladmin',
    component:ControladminComponent
  },



  {
    path:'**',
    component:DashboardComponent
  },


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports:[RouterModule]
})
export class AppRoutingModule {

 }
