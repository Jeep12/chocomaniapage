import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataServiceService } from 'src/app/services/data-service.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  cuadroNombre:string= "";
  usuariox:any;
  constructor(private auth:AuthService,private dataService:DataServiceService,private userService:UsuariosService) {

   }

  ngOnInit(): void {
  }
  prueba1(){

  }
  getUid(){

    return this.auth.getUid();
  }
  insertar():void {
  }

}
