import { Component, OnInit } from '@angular/core';
import { JobPostingService } from '../services/job-posting.service';
import { JobPosting } from '../models/job-posting.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'SSS-job-posting-list',
  templateUrl: './job-posting-list.component.html',
  styleUrls: ['./job-posting-list.component.css']
})
export class JobPostingListComponent implements OnInit{

  jobPostings$?: Observable<JobPosting[]>;

  constructor(private jobPostService: JobPostingService) {

   }

  ngOnInit(): void {
        // get all blog posts from API
    this.jobPostings$ = this.jobPostService.getAllJobPosting();
  }

}
