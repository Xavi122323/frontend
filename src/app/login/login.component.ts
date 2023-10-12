import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientService } from '../services/client.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private clientService: ClientService, private router: Router){}

  user: any;

  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(): void {
    this.clientService.login(this.userForm.value)
      .subscribe(
        /*(response) => {
          console.log('Login successful', response);
          this.router.navigate(['list/client']);
        },
        (error) => {
          console.error('Login failed', error);
        }*/
        user => {
          this.user = user
        }
      );
  }

  registerRoute(){
    this.router.navigate(['register/user']);
  }

}
