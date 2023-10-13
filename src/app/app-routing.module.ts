import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'register/user', component:RegisterComponent
  },
  {
    path:'list/client', component:ListClientsComponent, canActivate:[AuthGuard]
  },
  {
    path:'create/client', component:CreateClientComponent, canActivate:[AuthGuard]
  },
  {
    path:'edit/client/:clientID', component:EditClientComponent, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
