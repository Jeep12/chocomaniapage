import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { User } from 'src/app/Interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';
import { CookieService } from 'ngx-cookie-service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuario: any = {
    id:"",
    data:{}
  }

  isAdmin: boolean = false;
  constructor(
    private authService: AuthService,
    private loadScripts: LoadScriptsService,
    private cookies: CookieService,
    private us: UsuariosService,
    private afAuth: AngularFireAuth

  ) {



    this.loadScripts.load(["header/header"]);

  }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged(user => {
      let email = user?.email;
      this.us.getUserFireStore(email).then(userfs => {
        //cargo el usuario
        this.usuario.id = email;
        this.usuario.data = userfs;
        console.log(this.usuario.data.access);

      })
    })


  }
  logout() {
    this.usuario.id = "";
    this.usuario.data = {access:0};
    this.authService.logout();
  }
  islogged() {
    return this.authService.isLogged();
  }
  pruebaheader(){
    let local:string | any = localStorage.getItem('usuario');
    let localJson = JSON.parse(local);
    console.log(localJson);
  }

}
