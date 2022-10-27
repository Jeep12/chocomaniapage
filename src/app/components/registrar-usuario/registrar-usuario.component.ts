import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  registerUsers: FormGroup;
  //variable para mostrar el spinner /loading/loader

  //Inyeccion de dependencia variable fb clase FormBuilder se usa para el construir el formulario
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService


  ) {
    //registeUsers tiene que hacer match con la directiva [formGroud]="registerUsers", 
    this.registerUsers = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  register() {
    const email = this.registerUsers.value.email;
    const password = this.registerUsers.value.password;
    const repeatPassword = this.registerUsers.value.repeatPassword;


    if (email == "" && password == "" && repeatPassword == "") {
      this.toastr.error("Debe llenar los campos");
    } else {
      if (password == repeatPassword) {
        this.authService.register(email,password)
      } else {
        this.toastr.error("Las contraseñas no coinciden")
      }
    }
  }


}
