import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "";


  constructor(private afAuth:AngularFireAuth,private usuario:UsuariosService){
    this.afAuth.authState.subscribe(user=>{

    })
  }

}
