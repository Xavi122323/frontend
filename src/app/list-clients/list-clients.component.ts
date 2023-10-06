import { Component } from '@angular/core';
import { ClientService } from '../services/client.service';
  
@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent {

  clients: any;

  constructor(private clientService: ClientService){

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
  }
}
