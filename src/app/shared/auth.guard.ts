import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard{

  constructor(private authService: AuthService, private router: Router){}
  
  canActivate(){
    if(this.authService.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }
  }
}
