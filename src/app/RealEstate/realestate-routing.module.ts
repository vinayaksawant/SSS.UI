import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RealestateHomeComponent } from './realestate-home/realestate-home.component';
import { PropertyforbuyrentListComponent } from './propertyforbuyrent-list/propertyforbuyrent-list.component';
import { PropertyforsellleaseListComponent } from './propertyforselllease-list/propertyforselllease-list.component';
import { PropertyforbuyrentComponent } from './propertyforbuyrent/propertyforbuyrent.component';
import { PropertyforsellleaseComponent } from './propertyforselllease/propertyforselllease.component';

const routes: Routes = [
  {path: 'realestate/realestatehome', component:RealestateHomeComponent},
  {path: 'realestate/Propertyforbuyrent', component:PropertyforbuyrentListComponent},
  {path: 'realestate/Propertyforselllease', component:PropertyforsellleaseListComponent},
  {path: 'realestate/Propertyforbuyrent/:id', component:PropertyforbuyrentComponent},
  {path: 'realestate/Propertyforselllease/:id', component:PropertyforsellleaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealestateRoutingModule { }
