import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path: 'User/User/:id', component:UserComponent},  
  {path: 'User/Login', component:UserLoginComponent},
  {path: 'User/User/:id', component:UserComponent},
  {path: 'User/UserList', component:UserListComponent},
  {path: 'User/Register', component:RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
