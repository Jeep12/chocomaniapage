import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInUser:FormGroup;
  dataUser:any;

  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private router:Router,
    private afAuth:AngularFireAuth
     ){
      //Falta trabajar con los validators para el control de error de login
      this.logInUser = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      });


    
  }

  ngOnInit(): void {
  }

  login(){
    const email = this.logInUser.value.email;
    const password = this.logInUser.value.password;
    this.authService.login(email,password);
  }
  logInWithGoogle(){
    this.authService.loginWithGoogle();
  }
  logg(){
    return this.authService.isLogged();
  }


}
