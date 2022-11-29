import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AddnewsService } from 'src/app/services/addnews.service';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Notice } from 'src/app/utils/Notice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  notices:Notice[] = [];
  usuario: any = {
    id:"",
    data:{}
  }
  constructor(
    private noticeService:AddnewsService,
    private afAuth:AngularFireAuth,
    private us:UsuariosService,
    private authService:AuthService
    ){
   }

  ngOnInit(): void {
    this.noticeService.getAllNotices().subscribe((notices)=>{
        this.notices=notices.reverse();
    });

    this.afAuth.onAuthStateChanged(user => {
      let email = user?.email;

    })


  }
  deleteNotice(notice:Notice){
    this.noticeService.deleteNotice(notice).subscribe(e=>{
      console.log(e);
    });
  }
  islogged() {
    return this.authService.isLogged();
  }


}
