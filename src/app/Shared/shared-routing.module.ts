import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainHomeComponent } from './main-home/main-home.component';
import { AboutComponent } from './about/about.component';
import { UpcommingeventComponent } from './upcommingevent/upcommingevent.component';

const routes: Routes = [
  {path: 'mainhome',component:MainHomeComponent},
  {path: 'upcommingevents',component:UpcommingeventComponent},  
  {path: 'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
