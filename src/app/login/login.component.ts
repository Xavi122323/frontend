import { Component } from '@angular/core';
import { ClientService } from '../services/client.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private clientService: ClientService){}

  username: string = '';
  password: string = '';

  onSubmit(): void {
    this.clientService.login(this.username, this.password)
      .subscribe(
        (response) => {
          console.log('Login successful', response);
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
  }

}
