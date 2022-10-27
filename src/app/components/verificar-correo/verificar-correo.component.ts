import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-verificar-correo',
  templateUrl: './verificar-correo.component.html',
  styleUrls: ['./verificar-correo.component.css']
})
export class VerificarCorreoComponent implements OnInit {
  userMail: string | null | undefined;
  
  constructor(
    private afAuth: AngularFireAuth,
  ){ 
    this.afAuth.authState.subscribe(user=>{
      this.userMail=user?.email;
    })
  }

  ngOnInit(): void {
  }




}
