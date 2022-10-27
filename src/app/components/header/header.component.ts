import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService:AuthService,
    private afAuth:AngularFireAuth
    
    ) { 
    }

  ngOnInit(): void {

  }
  logout(){
    this.authService.logout();
  }
  islogged(){
  return this.authService.isLogged();
  }
  logg(){
    alert(this.authService.isLogged());
  }
}
