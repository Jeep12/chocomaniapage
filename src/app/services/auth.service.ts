import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { FireBaseErrorService } from './fire-base-error.service';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { User } from '../Interfaces/User';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userMail: string | null | undefined;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private fireBaseError: FireBaseErrorService,
    private cookies: CookieService,
    private us: UsuariosService
  ) {
    this.afAuth.authState.subscribe(user => {
      this.userMail = user?.email;
    })
  }


  //REGISTRO DE FIREBASE CON USEREMAIL Y PASSWORD
  register(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.verifyMail();
      if (user) {
        this.us.setUserFS(user);
      } else {
        console.log("Error");
      }
    }).catch((error) => {

      this.toastr.error(this.fireBaseError.fireBaseError(error.code));
    });
  }

  //El usuario de firebase tiene metodos y propiedades, una es si el email se verifico o no.
  //y  este metodo se encarga de mandar un email de verificacion
  verifyMail() {
    this.afAuth.currentUser.then(user => {
      user?.sendEmailVerification()})


    this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        this.toastr.info("Le enviamos un correo electronico para verificar su cuenta", "Verificar Correo");
        this.router.navigate(['/verificar-correo']);
      })
  }


  //Para iniciar sesion se comprueba si el email este verificado o no.
  //user.user?.emailVerified <-- esta propiedad
  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
      //console.log(user);
      if (user.user?.emailVerified) {
        this.toastr.success("Bienvenido");




      } else {
        console.log(user);

        this.router.navigate(['/verificar-correo'])
      }
    }).catch(error => {

      console.log(error);
      this.toastr.error(this.fireBaseError.fireBaseError(error.code));
    })
  }
  // RECUPERAR USUARIO
  recoverUser(email: string) {
    this.afAuth.sendPasswordResetEmail(email).then((response) => {
      this.toastr.info('Le enviamos un correo electronico para restableces su contraseña', 'Recuperar Contraseña')
      this.router.navigate(['/login'])

    }).catch(error => {
      this.toastr.error(this.fireBaseError.fireBaseError(error.code));
    })
  }
  // DESTRUIR SESION
  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/dashborad']);
      localStorage.removeItem('usuario');
    })
  }
  //SI ESTA LOGEADO
  isLogged(): boolean {
    if (this.userMail != null || this.userMail != undefined) {

      return true;
    } else {
      return false;
    }
  }
  loginWithGoogle() {
    return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider).then(res => {
      //Aca obtengo el usuario creado con google, y updateUserFs lo va actualizar si existe y si no lo va a crear
      this.us.setUserFS(res);

      this.router.navigate(['/']);
    }, err => {
      alert(err.message);
    })
  }
  loginWithFacebook() {
    return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider).then(res => {
      localStorage.setItem('token', JSON.stringify(res.user?.uid));
      this.router.navigate(['/']);

    }, err => {
      alert(err.message);
    })
  }


  getUid() {
    return this.afAuth.authState;
  }


}
