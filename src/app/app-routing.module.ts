import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';

const routes: Routes = [
  {
    path:'', component:ListClientsComponent
  },
  {
    path:'create/client', component:CreateClientComponent
  },
  {
    path:'edit/client/:clientID', component:EditClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
