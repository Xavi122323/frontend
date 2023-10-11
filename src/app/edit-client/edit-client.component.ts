import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})

export class EditClientComponent {

  clientForm!: FormGroup;
  client: any;
  id: any;

  constructor(private clientService: ClientService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('clientID'))
    this.clientService.findClient(this.id).subscribe(
      (client) => {
        this.client=client
        this.clientForm = new FormGroup({
          name: new FormControl(this.client.name),
          email: new FormControl(this.client.email),
          identification: new FormControl(this.client.identification)
        });
      }
    )
  }

  onSubmit(){
    this.clientService.editClient(this.clientForm.value, this.id).subscribe(
      (client) =>{
        
      }
    )
    this.router.navigate(['list/client']);
  }

}
