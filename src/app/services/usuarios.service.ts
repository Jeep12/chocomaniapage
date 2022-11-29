import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { collection, Firestore, setDoc, doc, addDoc, where, query, getDocs, getDoc, updateDoc } from '@angular/fire/firestore';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  isAdmin: boolean = false;
  constructor(private db: Firestore, private afAuth: AngularFireAuth) {
  }

  //Este metodo setea los usuarios en FireStore para cuando se logee con la autenticacion de firebase normal o con google y demas metodos, en este caso solo con google
  // Recibe un usuario del login normal o de google, con eso hago una peticion a firestore para poder ver si existe o no el usuario...
  // si el usuario existe actualizo los datos del usuario en firestore ya que con el login de google tiene mas datos como el nombre o una foto etc.
  // sino existe creo un usuario nuevo en firestore

  async setUserFS(res: any) {
    let email = res.user.email;
    const docRef = doc(this.db, "users", email);
    const docSnap = await getDoc(docRef);
    //setDoc actualiza si existe y si no crea un json nuevo en firestore
    if (docSnap.exists()) {
      //
      let isAdmin = 0;

      let usuarioExistente = docSnap.data();
      // este if se ocupa de chckear si el usuario que existe es admin o no, asi se actualiza en firestore. tuve que hacerlo con esta condicional porque con un operador ternario no andaba, no se pq
      //esto lo hice porque si se quiere logear con el mismo email pero con google, te da mas informacion del usuario entonces quiero guardarla en firestore.
      // pero necesito saber si es admin o no para perder el acceso..
      if (usuarioExistente['access'] == 0) {
        isAdmin = 0;
      }
      else {
        isAdmin = 1;
      }
      await setDoc(doc(this.db, "users", email), {
        access: isAdmin,
        displayName: res.user.displayName,
        email: res.user.email,
        phoneNumber: res.user.phoneNumber,
        photoURL: res.user.photoURL,
        providerId: "",
        uid: res.user.uid
      });


    } else {
      //por ejemplo aca como no existe, siempre por defecto no va a ser admin
      await setDoc(doc(this.db, "users", email), {
        access: 0,
        displayName: res.user.displayName,
        email: res.user.email,
        phoneNumber: res.user.phoneNumber,
        photoURL: res.user.photoURL,
        providerId: "",
        uid: res.user.uid
      });
    }

  }


}
