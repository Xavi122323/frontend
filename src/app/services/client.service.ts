import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url:string = "http://127.0.0.1:3000";
  constructor(private http: HttpClient) { }

  listClient(): Observable<any> {
    return this.http.get(this.url+'/api/v1/clientes');
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addClient(data: any){
    return this.http.post(this.url+'/api/v1/clientes', {client: data}, this.httpOptions)
  }

  findClient(id: any){
    return this.http.get(this.url+'/api/v1/clientes/'+id)
  }

  editClient(data:any, id:any){
    return this.http.put(this.url+'/api/v1/clientes/'+id,  data, this.httpOptions)
  }

  deleteClient(id: any){
    return this.http.delete(this.url+'/api/v1/clientes/'+id)
  }

  login(data: any){
    return this.http.post(this.url+'/api/v1/users', {user: data}, this.httpOptions);
  }

  register(data: any){
    return this.http.post(this.url+'/api/v1/users', {user: data}, this.httpOptions)
  }
  
}
