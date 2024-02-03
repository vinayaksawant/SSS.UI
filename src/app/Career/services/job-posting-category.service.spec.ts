import { TestBed } from '@angular/core/testing';

import { JobPostingCategoryService } from './job-posting-category.service';

describe('JobPostingCategoryService', () => {
  let service: JobPostingCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobPostingCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
