import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealestateRoutingModule } from './realestate-routing.module';
import { RealestateHomeComponent } from './realestate-home/realestate-home.component';
import { PropertyforsellListComponent } from './propertyforsell-list/propertyforsell-list.component';
import { PropertyforbuyListComponent } from './propertyforbuy-list/propertyforbuy-list.component';
import { PropertyforbuyComponent } from './propertyforbuy/propertyforbuy.component';
import { PropertyforsellComponent } from './propertyforsell/propertyforsell.component';
import { PropertyforsellleaseComponent } from './propertyforselllease/propertyforselllease.component';
import { PropertyforbuyrentComponent } from './propertyforbuyrent/propertyforbuyrent.component';
import { PropertyforbuyrentListComponent } from './propertyforbuyrent-list/propertyforbuyrent-list.component';
import { PropertyforsellleaseListComponent } from './propertyforselllease-list/propertyforselllease-list.component';


@NgModule({
  declarations: [
    RealestateHomeComponent,
    PropertyforsellListComponent,
    PropertyforbuyListComponent,
    PropertyforbuyComponent,
    PropertyforsellComponent,
    PropertyforsellleaseComponent,
    PropertyforbuyrentComponent,
    PropertyforbuyrentListComponent,
    PropertyforsellleaseListComponent
  ],
  imports: [
    CommonModule,
    RealestateRoutingModule
  ]
})
export class RealestateModule { }
