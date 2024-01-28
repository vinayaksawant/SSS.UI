import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { JobPosting } from '../models/job-posting.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {

  constructor(private http: HttpClient) { }

  getAllJobPosts() : Observable<JobPosting[]> {
    return this.http.get<JobPosting[]>(`${environment.apiBaseUrl}/api/JobPostings`);
  }

  getBlogPostById(id: string): Observable<JobPosting> {
    return this.http.get<JobPosting>(`${environment.apiBaseUrl}/api/JobPostings/${id}`);
  }

}
