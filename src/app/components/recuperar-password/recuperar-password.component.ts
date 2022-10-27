import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FireBaseErrorService } from 'src/app/services/fire-base-error.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
  recoverUser:FormGroup;
  loading:boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService:AuthService
  ){
    this.recoverUser = this.fb.group({
      email: ['', Validators.required],
   })
  }

  ngOnInit(): void {
  }
  recoverUsers(){
    const email = this.recoverUser.value.email;
    this.authService.recoverUser(email);
  }

}
