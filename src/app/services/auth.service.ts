import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { FireBaseErrorService } from './fire-base-error.service';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { User } from '../Interfaces/User';

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
    private cookies: CookieService
  ) {
    this.afAuth.authState.subscribe(user => {
      this.userMail = user?.email;
    })
  }


  //REGISTRO 
  register(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.verifyMail();
    }).catch((error) => {

      this.toastr.error(this.fireBaseError.fireBaseError(error.code));
    });
  }

  //VERIFICAR MAIL
  verifyMail() {
    this.afAuth.currentUser.then(user => {
      user?.sendEmailVerification()
    })
    this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        this.toastr.info("Le enviamos un correo electronico para verificar su cuenta", "Verificar Correo");
        this.router.navigate(['/login']);
      })
  }


  //INCIIAR SESION
  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
      //console.log(user);
      if (user.user?.emailVerified) {
        this.toastr.success("Bienvenido");
        this.router.navigate(['/dashboard']);
        let displayName:User | any = user.user.displayName;
        let email:User | any = user.user.email;
        let uid:User | any = user.user.uid;
        let image:User | any = user.user.photoURL;

        this.cookies.set('uid', uid);
        this.cookies.set('image', image);
        this.cookies.set('name', displayName);
        this.cookies.set('userMail', email);
        console.log(user);

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
      this.router.navigate(['/login']);
      this.cookies.delete('userMail');
      this.cookies.delete('uid');
      this.cookies.delete('image');
      this.cookies.delete('name');
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
      localStorage.setItem('token', JSON.stringify(res.user?.uid));
      let displayName:User | any = res.user?.displayName;
      let email:User | any = res.user?.email;
      let uid:User | any = res.user?.uid;
      let image:User | any = res.user?.photoURL;

      this.cookies.set('uid', uid);
      this.cookies.set('image', image);
      this.cookies.set('name', displayName);
      this.cookies.set('userMail', email);

      this.router.navigate(['/']);
    }, err => {
      alert(err.message);
    })
  }
  loginWithFacebook(){
    return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider).then(res =>{
        localStorage.setItem('token',JSON.stringify(res.user?.uid));
        this.router.navigate(['/']);

    },err=>{
        alert(err.message);
    })
}





}
