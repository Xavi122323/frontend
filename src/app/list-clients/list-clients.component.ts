import { Component } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent {

  clients: any;

  constructor(private clientService: ClientService, private router: Router){

  }

  ngOnInit(){
    this.ClientList();
  }

  ClientList(){
    this.clientService.listClient().subscribe(
      clients => {
        this.clients = clients;
        console.log(this.clients);
      }
    )
  }

  deleteClient(id:any){
    this.clientService.deleteClient(id).subscribe(
      client => {
        
      }
    )
    this.ClientList();
    this.router.navigate(['list/client']);
  }

  editClient(id:any){
    this.router.navigate(['edit/client/'+id]);
  }

  createClient(){
    this.router.navigate(['create/client']);
  }
}
