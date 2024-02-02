import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialservicesRoutingModule } from './socialservices-routing.module';
import { SocialservicesHomeComponent } from './socialservices-home/socialservices-home.component';
import { SocialservicesListComponent } from './socialservices-list/socialservices-list.component';
import { SocialserviceComponent } from './socialservice/socialservice.component';


@NgModule({
  declarations: [
    SocialservicesHomeComponent,
    SocialservicesListComponent,
    SocialserviceComponent
  ],
  imports: [
    CommonModule,
    SocialservicesRoutingModule
  ]
})
export class SocialservicesModule { }
