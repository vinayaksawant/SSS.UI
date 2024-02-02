import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { MarketplaceHomeComponent } from './marketplace-home/marketplace-home.component';
import { ItemsellingListComponent } from './itemselling-list/itemselling-list.component';
import { ItembuyingListComponent } from './itembuying-list/itembuying-list.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServiceseekerListComponent } from './serviceseeker-list/serviceseeker-list.component';
import { ServiceseekerComponent } from './serviceseeker/serviceseeker.component';
import { ServicesComponent } from './services/services.component';
import { ServicesofferedListComponent } from './servicesoffered-list/servicesoffered-list.component';
import { ServiceofferedComponent } from './serviceoffered/serviceoffered.component';


@NgModule({
  declarations: [
    MarketplaceHomeComponent,
    ItemsellingListComponent,
    ItembuyingListComponent,
    ServicesListComponent,
    ServiceseekerListComponent,
    ServiceseekerComponent,
    ServicesComponent,
    ServicesofferedListComponent,
    ServiceofferedComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule
  ]
})
export class MarketplaceModule { }
