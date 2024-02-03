import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { CareerRoutingModule } from './career-routing.module';
import { CareerHomeComponent } from './career-home/career-home.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { JobPostingListComponent } from './job-posting-list/job-posting-list.component';
import { CandidateComponent } from './candidate/candidate.component';
import { EmployerComponent } from './employer/employer.component';

import { JobPostingAddComponent } from './job-posting-add/job-posting-add.component';
import { JobPostingEditComponent } from './job-posting-edit/job-posting-edit.component';
import { JobPostingViewComponent } from './job-posting-view/job-posting-view.component';


@NgModule({
  declarations: [
    CareerHomeComponent,
    EmployerListComponent,
    CandidateListComponent,
    JobPostingListComponent,
    CandidateComponent,
    EmployerComponent,
    JobPostingAddComponent,
    JobPostingEditComponent,
    JobPostingViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CareerRoutingModule
  ],
  exports: [


  ]
})
export class CareerModule { }
