import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientService } from '../services/client.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent {

  cliente: any;

clientForm = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  identification: new FormControl('')
})

constructor(private clientService: ClientService, private router: Router){}

onSubmit(){
  this.clientService.addClient(this.clientForm.value).subscribe(
    cliente => {
      this.cliente = cliente
    }
  )
  this.router.navigate(['list/client']);
}

}
