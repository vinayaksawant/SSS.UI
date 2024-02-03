import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { JobPosting } from '../models/job-posting.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { JobPostingAdd } from '../models/job-posting-add.models';
import { JobPostingUpdate } from '../models/job-posting-update.models';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {

  constructor(private http: HttpClient,
    private cookieService : CookieService) { }

  
    createJobPosting(data: JobPostingAdd) : Observable<JobPosting> {
      return this.http.post<JobPosting>(`${environment.apiBaseUrl}/api/JobPostings?addAuth=true`, data);
    }
 
    
    getAllJobPosting() : Observable<JobPosting[]> {
      return this.http.get<JobPosting[]>(`${environment.apiBaseUrl}/api/JobPostings`);
    }

    // getAllBlogPosts() : Observable<BlogPost[]> {
    //   return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/blogposts`);
    // }

    getJobPostingById(id: string): Observable<JobPosting> {
      return this.http.get<JobPosting>(`${environment.apiBaseUrl}/api/JobPostings/${id}`);
    }
      
    // getBlogPostById(id: string): Observable<BlogPost> {
    //   return this.http.get<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}`);
    // }
  
    getJobPostingByUrlHandle(urlHandle: string): Observable<JobPosting> {
      return this.http.get<JobPosting>(`${environment.apiBaseUrl}/api/JobPostings/${urlHandle}`);
    }
  
    updateJobPosting(id: string, updatedJobPosting: JobPostingUpdate): Observable<JobPosting> {
      return this.http.put<JobPosting>(`${environment.apiBaseUrl}/api/JobPostings/${id}?addAuth=true`, updatedJobPosting);
    }
  
    deleteJobPosting(id: string): Observable<JobPosting> {
      return this.http.delete<JobPosting>(`${environment.apiBaseUrl}/api/JobPostings/${id}?addAuth=true`);
    }

  // ,{ 
  //   headers: {
  //     'Authorization':this.cookieService.get('Authorization') 
  // }}
  

}
