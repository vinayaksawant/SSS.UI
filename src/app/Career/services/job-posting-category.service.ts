//import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JobPostingCategory } from '../models/job-posting-Category.models';
import { environment } from 'src/environments/environment';
//import { UpdateCategoryRequest } from '../models/update-category-request.model';
import { CookieService } from 'ngx-cookie-service';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobPostingCategoryService {


  constructor(private http: HttpClient,
    private cookieService: CookieService) { }

  getAllJobCategories(): Observable<JobPostingCategory[]> {
    return this.http.get<JobPostingCategory[]>(`${environment.apiBaseUrl}/api/JobCategories`);
  }

  getJobCategoryById(id: string): Observable<JobPostingCategory> {
    return this.http.get<JobPostingCategory>(`${environment.apiBaseUrl}/api/JobCategories/${id}`);
  }


  // addCategory(model: AddCategoryRequest): Observable<void> {
  //   return this.http.post<void>(`${environment.apiBaseUrl}/api/JobCategories?addAuth=true`, model);
  // }

  // updateCategory(id: string, updateCategoryRequest: UpdateCategoryRequest) : Observable<JobPostingCategory> {
  //   return this.http.put<JobPostingCategory>(`${environment.apiBaseUrl}/api/JobCategories/${id}?addAuth=true`, updateCategoryRequest);
  // }

  deleteJobCategory(id: string) : Observable<JobPostingCategory> {
    return this.http.delete<JobPostingCategory>(`${environment.apiBaseUrl}/api/categories/${id}?addAuth=true`)
  }

}


