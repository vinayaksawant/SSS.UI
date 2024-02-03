import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingViewComponent } from './job-posting-view.component';

describe('JobPostingViewComponent', () => {
  let component: JobPostingViewComponent;
  let fixture: ComponentFixture<JobPostingViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobPostingViewComponent]
    });
    fixture = TestBed.createComponent(JobPostingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
