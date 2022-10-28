import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { User } from 'src/app/Interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   image: any;
  
  constructor(
    private authService:AuthService,
    private loadScripts:LoadScriptsService,
    private cookies:CookieService,
    private afAuth:AngularFireAuth
    
    ) { 
      this.loadScripts.load(["header/header"]);
      this.afAuth.authState.subscribe(user=>{
          this.image=user?.photoURL;
      })
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
