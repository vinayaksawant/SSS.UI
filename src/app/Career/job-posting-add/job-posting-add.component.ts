import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { CategoryService } from '../../category/services/category.service';
import { Observable, Subscription } from 'rxjs';
// import { Category } from '../../category/models/category.model';
//import { ImageService } from 'src/app/shared/components/image-selector/image.service';
import { JobPostingAdd } from '../models/job-posting-add.models';
import { JobPostingCategory } from '../models/job-posting-Category.models';
import { JobPostingService } from '../services/job-posting.service';
import { JobPostingCategoryService } from '../services/job-posting-category.service';

@Component({
  selector: 'SSS-job-posting-add',
  templateUrl: './job-posting-add.component.html',
  styleUrls: ['./job-posting-add.component.css']
})
export class JobPostingAddComponent implements OnInit, OnDestroy {
  model: JobPostingAdd;
  isImageSelectorVisible : boolean = false;
  categories$?: Observable<JobPostingCategory[]>;

  imageSelectorSubscription?: Subscription;

  constructor(private jobPostingService: JobPostingService,
    private router: Router,
    private categoryService: JobPostingCategoryService
    //,
    //private imageService: ImageService
    ) {
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      featuredImageUrl: '',
      author: '',
      isVisible: true,
      publishedDate: new Date(),
      jobcategories: []
    }
  }


  ngOnInit(): void {
     this.categories$ = this.categoryService.getAllJobCategories();

    //  this.imageSelectorSubscription = this.imageService.onSelectImage()
    //  .subscribe({
    //   next: (selectedImage) => {
    //     this.model.featuredImageUrl = selectedImage.url;
    //     this.closeImageSelector();
    //   }
    //  })

  }

  onFormSubmit(): void {
    console.log(this.model);
     this.jobPostingService.createJobPosting(this.model)
     .subscribe({
       next: (response) => {
         this.router.navigateByUrl('career/JobPostings');
       }
     });
  }

  openImageSelector(): void {
    this.isImageSelectorVisible = true;
  }

  closeImageSelector() : void {
    this.isImageSelectorVisible = false;
  }

  ngOnDestroy(): void {
    this.imageSelectorSubscription?.unsubscribe();
  }
}
