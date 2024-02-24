import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AboutComponent } from './about/about.component';
import { UpcommingeventListComponent } from './upcommingevent-list/upcommingevent-list.component';
import { UpcommingeventComponent } from './upcommingevent/upcommingevent.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { UrlhandlelistComponent } from './urlhandlelist/urlhandlelist.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MainHomeComponent,
    AboutComponent,
    UpcommingeventListComponent,
    UpcommingeventComponent,
    FileUploadComponent,
    ImageUploadComponent,
    UrlhandlelistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    FileUploadComponent,
    ImageUploadComponent,
    UrlhandlelistComponent
  ]
})
export class SharedModule { }
