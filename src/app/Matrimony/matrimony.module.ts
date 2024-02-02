import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatrimonyRoutingModule } from './matrimony-routing.module';
import { MatrimonyHomeComponent } from './matrimony-home/matrimony-home.component';
import { GroomListComponent } from './groom-list/groom-list.component';
import { GroomComponent } from './groom/groom.component';
import { BrideComponent } from './bride/bride.component';
import { BrideListComponent } from './bride-list/bride-list.component';


@NgModule({
  declarations: [
    MatrimonyHomeComponent,
    GroomListComponent,
    GroomComponent,
    BrideComponent,
    BrideListComponent
  ],
  imports: [
    CommonModule,
    MatrimonyRoutingModule
  ]
})
export class MatrimonyModule { }
