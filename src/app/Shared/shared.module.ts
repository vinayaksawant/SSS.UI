import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AboutComponent } from './about/about.component';
import { UpcommingeventListComponent } from './upcommingevent-list/upcommingevent-list.component';
import { UpcommingeventComponent } from './upcommingevent/upcommingevent.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MainHomeComponent,
    AboutComponent,
    UpcommingeventListComponent,
    UpcommingeventComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
