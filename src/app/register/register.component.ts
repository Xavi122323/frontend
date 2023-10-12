import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private clientService: ClientService, private router: Router){}

  user: any;

  userForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(): void {
    this.clientService.register(this.userForm.value)
      .subscribe(
        user => {
          this.user = user
        }
      )
      this.router.navigate(['']);
  }

}
