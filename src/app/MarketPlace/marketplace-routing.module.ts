import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceHomeComponent } from './marketplace-home/marketplace-home.component';
import { ItembuyingListComponent } from './itembuying-list/itembuying-list.component';
import { ItemsellingListComponent } from './itemselling-list/itemselling-list.component';

const routes: Routes = [
  {path: 'marketplace/marketplacehome', component:MarketplaceHomeComponent},
  {path: 'marketplace/itembuyinglist', component:ItembuyingListComponent},
  // {path: 'marketplace/itembuyinglist/:id', component:Item},
  {path: 'marketplace/itemsellinglist', component:ItemsellingListComponent}
  // {path: 'marketplace/itemsellinglist/:id', component:Item}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }
