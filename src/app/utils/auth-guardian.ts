import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { AuthService } from "../services/auth.service";
@Injectable()
export class AuthGuardian implements CanActivate {
    constructor(private authService: AuthService, private router: Router,private cookies:CookieService) {
     
        this.prueba();
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   
        return !this.isLogg();
    }
    prueba(){
       this.authService.isLogged();
    }
    isLogg(){
        if(this.cookies.get('userMail') == ""){
            return false;
        }else {
            return true;
        }
    }
   



}