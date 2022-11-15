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


  async setUserFS(res: any) {
    let email = res.user.email;
    const docRef = doc(this.db, "users", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let isAdmin = 0;
      let usuarioExistente = docSnap.data();
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

  async getUserFireStore(email: any): Promise<Observable<any>> {

    let usuario: any = {
      id: "",
      data: {}
    }

    const ref = collection(this.db, 'users');
    const q = query(ref, where("email", "==", email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      usuario.id = doc.id;
      usuario.data = doc.data();
      localStorage.setItem("usuario", JSON.stringify(doc.data()));


    });

    return usuario;

  }







}
