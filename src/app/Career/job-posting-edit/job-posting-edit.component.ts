
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { JobPosting } from '../models/job-posting.model';
import { JobPostingCategory } from '../models/job-posting-Category.models';
import { JobPostingUpdate } from '../models/job-posting-update.models';

// import { ImageService } from 'src/app/shared/components/image-selector/image.service';
import { JobPostingService } from '../services/job-posting.service';
import { JobPostingCategoryService } from '../services/job-posting-category.service';
import { FileUploadService } from 'src/app/Shared/services/file-upload.service';
import { FileUpload } from 'src/app/Shared/models/file-upload.model';


@Component({
  selector: 'SSS-job-posting-edit',
  templateUrl: './job-posting-edit.component.html',
  styleUrls: ['./job-posting-edit.component.css']
})
export class JobPostingEditComponent implements OnInit, OnDestroy {
  
  parentComponentName: string = "EditJobPosting" ;
  parentComponentEntityId: string = "";  

  id: string | null = null;
  model?: JobPosting;
  categories$? : Observable<JobPostingCategory[]>;
  selectedCategories?: string[];
  isPopupVisible : boolean = false;

  selectedDocumentList?: any[];
  selectedUrlHandleList?: string[];    


  routeSubscription?: Subscription;
  updateBlogPostSubscription?: Subscription;
  getBlogPostSubscription?: Subscription;
  deleteBlogPostSubscription?: Subscription;
  fileSelectSubscricption?: Subscription;


  constructor(private route: ActivatedRoute,
    private jobPostingService: JobPostingService,
    private categoryService: JobPostingCategoryService,
    private router:Router,
    private fileService: FileUploadService
    ) {

  }


  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllJobCategories();


    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        this.parentComponentEntityId  = (this.id) ? this.id: "";

        // Get BlogPost From API
        if (this.id) {
          this.getBlogPostSubscription = this.jobPostingService.getJobPostingById(this.id).subscribe({
            next: (response) => {
              this.model = response;
              this.selectedCategories = response.jobCategories.map(x => x.id);
            }
          });
          ;
        }

        this.fileSelectSubscricption = this.fileService.onSelectImage()
        .subscribe({
          next: (response) => {
            if (this.model) {
              this.model.featuredImageUrl = response.url;
              this.isPopupVisible = false;
            }
          }
        })
      }
    });
  }

  onFormSubmit(): void {
    // Convert this model to Request Object
    if (this.model && this.id) {
      var updateJobPost: JobPostingUpdate = {
        author: this.model.author,
        content: this.model.content,
        shortDescription: this.model.shortDescription,
        featuredImageUrl: this.model.featuredImageUrl,
        isVisible: this.model.isVisible,
        publishedDate: this.model.publishedDate,
        title: this.model.title,
        urlHandle: this.model.urlHandle,
        jobcategories : this.selectedCategories ?? []
      };

      this.updateBlogPostSubscription = this.jobPostingService.updateJobPosting(this.id, updateJobPost)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('career/JobPostings');
        }
      });
    }

  }

  onDelete(): void {
    if (this.id) {
      // call service and delete blogpost
      this.deleteBlogPostSubscription = this.jobPostingService.deleteJobPosting(this.id)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('career/JobPostings');
        }
      });
    }
  }

  openFileSelector(): void {
    this.isPopupVisible = true;
  }

  closeFileSelector() : void {
    this.isPopupVisible = false;
  }

  getList(files : FileUpload[]) : void{
    this.selectedDocumentList = files;
    console.log(this.selectedDocumentList);
  }

  getUrlHandleList(UrlHandleList : string[]) : void{
    this.selectedUrlHandleList = UrlHandleList
    console.log(UrlHandleList);
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.updateBlogPostSubscription?.unsubscribe();
    this.getBlogPostSubscription?.unsubscribe();
    this.deleteBlogPostSubscription?.unsubscribe();
    this.fileSelectSubscricption?.unsubscribe();
  }
}
