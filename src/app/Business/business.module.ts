import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessHomeComponent } from './business-home/business-home.component';
import { EnterprisesListComponent } from './enterprises-list/enterprises-list.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { ServiceofferedComponent } from './serviceoffered/serviceoffered.component';
import { ServiceseekerComponent } from './serviceseeker/serviceseeker.component';
import { ServiceseekerListComponent } from './serviceseeker-list/serviceseeker-list.component';
import { ServiceofferedListComponent } from './serviceoffered-list/serviceoffered-list.component';


@NgModule({
  declarations: [
    BusinessHomeComponent,
    EnterprisesListComponent,
    EnterprisesComponent,
    ServiceofferedComponent,
    ServiceseekerComponent,
    ServiceseekerListComponent,
    ServiceofferedListComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule { }
