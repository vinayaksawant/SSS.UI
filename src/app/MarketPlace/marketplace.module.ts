import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { MarketplaceHomeComponent } from './marketplace-home/marketplace-home.component';
import { ItemsellingListComponent } from './itemselling-list/itemselling-list.component';
import { ItembuyingListComponent } from './itembuying-list/itembuying-list.component';


@NgModule({
  declarations: [
    MarketplaceHomeComponent,
    ItemsellingListComponent,
    ItembuyingListComponent,
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule
  ]
})
export class MarketplaceModule { }
