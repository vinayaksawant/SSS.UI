import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingListComponent } from './job-posting-list.component';

describe('JobPostingListComponent', () => {
  let component: JobPostingListComponent;
  let fixture: ComponentFixture<JobPostingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobPostingListComponent]
    });
    fixture = TestBed.createComponent(JobPostingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
