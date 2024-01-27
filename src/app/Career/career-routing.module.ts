import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CareerHomeComponent } from './career-home/career-home.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { JobPostingListComponent } from './job-posting-list/job-posting-list.component';
import { EmployerComponent } from './employer/employer.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { CandidateComponent } from './candidate/candidate.component';

const routes: Routes = [
  {path: 'career/careerhome', component:CareerHomeComponent},
  {path: 'career/Employers', component:EmployerListComponent},
  {path: 'career/Employers/:id', component:EmployerComponent},
  {path: 'career/Candidates', component:CandidateListComponent},
  {path: 'career/Candidates/:id', component:CandidateComponent},
  {path: 'career/JobPostings', component:JobPostingListComponent},
  {path: 'career/JobPostings/:id', component:JobPostingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
