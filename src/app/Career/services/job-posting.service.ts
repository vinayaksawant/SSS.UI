import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { JobPosting } from '../models/job-posting.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {

  constructor(private http: HttpClient,
    private cookieService : CookieService) { }

  getAllJobPosts() : Observable<JobPosting[]> {
    return this.http.get<JobPosting[]>(`${environment.apiBaseUrl}/api/JobPostings`);
  }

  // ,{ 
  //   headers: {
  //     'Authorization':this.cookieService.get('Authorization') 
  // }}
  
  getBlogPostById(id: string): Observable<JobPosting> {
    return this.http.get<JobPosting>(`${environment.apiBaseUrl}/api/JobPostings/${id}`);
  }

}
