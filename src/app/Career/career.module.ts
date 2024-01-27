import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareerHomeComponent } from './career-home/career-home.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { JobPostingListComponent } from './job-posting-list/job-posting-list.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { CandidateComponent } from './candidate/candidate.component';
import { EmployerComponent } from './employer/employer.component';


@NgModule({
  declarations: [
    CareerHomeComponent,
    EmployerListComponent,
    CandidateListComponent,
    JobPostingListComponent,
    JobPostingComponent,
    CandidateComponent,
    EmployerComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule
  ]
})
export class CareerModule { }
