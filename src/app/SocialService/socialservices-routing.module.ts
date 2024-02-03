import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialservicesHomeComponent } from './socialservices-home/socialservices-home.component';
import { SocialservicesListComponent } from './socialservices-list/socialservices-list.component';
import { SocialserviceComponent } from './socialservice/socialservice.component';

const routes: Routes = [
  {path: 'socialservice/socialserviceshome', component:SocialservicesHomeComponent},
  {path: 'socialservice/socialserviceslist', component:SocialservicesListComponent},
  {path: 'socialservice/socialserviceslist/:id', component:SocialserviceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialservicesRoutingModule { }
