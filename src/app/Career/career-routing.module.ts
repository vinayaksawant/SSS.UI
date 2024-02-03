import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CareerHomeComponent } from './career-home/career-home.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { JobPostingListComponent } from './job-posting-list/job-posting-list.component';
import { EmployerComponent } from './employer/employer.component';
import { CandidateComponent } from './candidate/candidate.component';
import { JobPostingAddComponent } from './job-posting-add/job-posting-add.component';
import { JobPostingEditComponent } from './job-posting-edit/job-posting-edit.component';
import { JobPostingViewComponent } from './job-posting-view/job-posting-view.component';

const routes: Routes = [
  {path: 'career/careerhome', component:CareerHomeComponent},
  {path: 'career/Employers', component:EmployerListComponent},
  {path: 'career/Employers/:id', component:EmployerComponent},
  {path: 'career/Candidates', component:CandidateListComponent},
  {path: 'career/Candidates/:id', component:CandidateComponent},
  {path: 'career/JobPostings', component:JobPostingListComponent},
  {path: 'career/JobPostings/view/:id', component:JobPostingViewComponent},
  {path: 'career/JobPostings/edit/:id', component:JobPostingEditComponent},
  {path: 'career/JobPostings/add/1', component:JobPostingAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
