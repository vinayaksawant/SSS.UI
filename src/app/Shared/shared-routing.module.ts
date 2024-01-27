import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainHomeComponent } from './main-home/main-home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'MainHome',component:MainHomeComponent},
  {path: 'About',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
