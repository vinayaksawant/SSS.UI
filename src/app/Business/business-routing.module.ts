import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessHomeComponent } from './business-home/business-home.component';
import { EnterprisesListComponent } from './enterprises-list/enterprises-list.component';
import { ServiceofferedListComponent } from './serviceoffered-list/serviceoffered-list.component';
import { ServiceseekerListComponent } from './serviceseeker-list/serviceseeker-list.component';
import { ServiceseekerComponent } from './serviceseeker/serviceseeker.component';
import { ServiceofferedComponent } from './serviceoffered/serviceoffered.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';

const routes: Routes = [
  {path: 'business/businesshome', component:BusinessHomeComponent},
  {path: 'business/enterpriseslist', component:EnterprisesListComponent},
  {path: 'business/enterpriseslist/:id', component:EnterprisesComponent},
  {path: 'business/serviceofferedlist', component:ServiceofferedListComponent},
  {path: 'business/serviceofferedlist/:id', component:ServiceofferedComponent},
  {path: 'business/serviceseekerlist', component:ServiceseekerListComponent},
  {path: 'business/serviceseekerlist/:id', component:ServiceseekerComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
