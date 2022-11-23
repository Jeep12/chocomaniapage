import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddnewsService } from 'src/app/services/addnews.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  notices: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private noticeService:AddnewsService

  ) {
    this.notices = this.fb.group({
      titulo: ['', Validators.required],
      noticia: ['', Validators.required],
      autor: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  addNew(){
    const titulo = this.notices.value.titulo;
    const noticia = this.notices.value.noticia;
    const autor = this.notices.value.autor;
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let yer = today.getFullYear();
    let hora = today.getHours();
    let minuts = today.getMinutes();
    let fecha = day + '/' + month + '/' + yer + ' ' + hora + ':'+minuts;

    if (titulo != "" && noticia != "" && autor != ""){
      this.noticeService.addNews(titulo,noticia,autor,fecha).subscribe(e=>{
        this.toastr.success("Noticia agregada correctamente");
      });
    }else {
      this.toastr.error("Error","Faltan llenar campos");
    }

  }

  traerNotices(){
    this.noticeService.getAllNotices().subscribe(e=>{
      console.log(e);
    })
  }

}
