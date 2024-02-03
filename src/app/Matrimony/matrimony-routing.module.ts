import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatrimonyHomeComponent } from './matrimony-home/matrimony-home.component';
import { GroomListComponent } from './groom-list/groom-list.component';
import { BrideListComponent } from './bride-list/bride-list.component';
import { BrideComponent } from './bride/bride.component';
import { GroomComponent } from './groom/groom.component';

const routes: Routes = [
  {path: 'matrimony/matrimonyhome', component:MatrimonyHomeComponent},
  {path: 'matrimony/GroomList', component:GroomListComponent},
  {path: 'matrimony/GroomList/:id', component:GroomComponent},
  {path: 'matrimony/BrideList', component:BrideListComponent},
  {path: 'matrimony/BrideList/:id', component:BrideComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatrimonyRoutingModule { }
