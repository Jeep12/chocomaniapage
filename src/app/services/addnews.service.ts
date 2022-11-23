import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Notice } from '../utils/Notice';

@Injectable({
  providedIn: 'root'
})
export class AddnewsService {
  url: string = 'https://637acfb6702b9830b9f37f16.mockapi.io/api/notices';
  notice!: Notice;
  constructor(
    private http: HttpClient
  ){

  }


  addNews(titulo: string, noticia: string, autor: string,fecha:string) {
    console.log("Metodo de servicio add new");
    let url = "https://637acfb6702b9830b9f37f16.mockapi.io/api/notices";
    let notice: Notice = {

      "titulo": titulo,
      "fecha": fecha,
      "notice": noticia,
      "image": '',
      "autor": autor
    }
    return this.http.post(url, notice);
  }


  getAllNotices(): Observable<Notice[]> {
    return this.http.get<Notice[]>(this.url);
  }

  //Recibe la noticia como si fuera de ningun tipo porque el id no esta declarado en mi interface y mockapi crea un id autoincremental
  //Por eso no esta tipado esta noticia y en los demas metodos si
  deleteNotice(notice:any) {
    let url = this.url + "/"+ notice.id;
   return  this.http.delete(url);



  }
}
