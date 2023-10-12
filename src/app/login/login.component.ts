import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router)
  {
    localStorage.clear();
  }

  user: any;
  responseData: any;

  userForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  onSubmit(): void {
    this.authService.proceedLogin(this.userForm.value.email, this.userForm.value.password)
      .subscribe(
        result =>{
          if(result != null){
            this.responseData = result;
            localStorage.setItem('token',this.responseData.jwtToken)
            this.router.navigate(['list/client']);
          }
        }
      );
  }

  registerRoute(){
    this.router.navigate(['register/user']);
  }

}
