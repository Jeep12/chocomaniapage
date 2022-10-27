import { Injectable } from '@angular/core';
import { FireBaseErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FireBaseErrorService {

  constructor() { }



  fireBaseError(code: string) {
    switch (code) {
      case FireBaseErrorEnum.WrongPassword: return 'Contraseña incorrecta';
      case FireBaseErrorEnum.UserNotFound: return 'No se encontro el usuario';
      case FireBaseErrorEnum.InternalError: return 'Faltan campos por rellenar';
      case FireBaseErrorEnum.InvalidEmail: return 'Faltan campos por rellenar';
      case FireBaseErrorEnum.EmailAlreadyInUse: return 'El usuario ya existe';
      case FireBaseErrorEnum.WeakPassword: return 'La contraseña es muy debil';


      default: return '';
    }
  }
 
}
