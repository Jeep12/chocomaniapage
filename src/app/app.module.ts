import { NgModule } from '@angular/core';

//MODULOS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataServiceService } from './services/data-service.service';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { HeaderComponent } from './components/header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { FireBaseErrorService } from './services/fire-base-error.service';
import { AuthService } from './services/auth.service';
import { AuthGuardian } from './utils/auth-guardian';
import { CookieService } from 'ngx-cookie-service';
import { LoadScriptsService } from './services/load-scripts.service';
import { ProductsComponent } from './components/products/products.component';
import { CarouselProductsComponent } from './carousel-products/carousel-products.component';
import { FeedIGComponent } from './components/feed-ig/feed-ig.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalCartComponent } from './components/modal-cart/modal-cart.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    HeaderComponent,
    ProductsComponent,
    CarouselProductsComponent,
    FeedIGComponent,
    FooterComponent,
    ModalCartComponent,
    ContactoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //Modulo reactivo, distinta manera de obtener los datos de un formlario "FormGroup"
    ReactiveFormsModule,
    //Inicializo la aplicacion en firebase version angular, las propiedades que se envian por paremetro se obtienen del mismo firebase (en la web de firebase)
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    // ng add @angular/fire configurar firestore dependencia
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),


  ],
  providers: [
    FireBaseErrorService,
    AuthService,
    AuthGuardian,
    CookieService,
    LoadScriptsService,
    DataServiceService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
