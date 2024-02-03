import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingAddComponent } from './job-posting-add.component';

describe('JobPostingAddComponent', () => {
  let component: JobPostingAddComponent;
  let fixture: ComponentFixture<JobPostingAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobPostingAddComponent]
    });
    fixture = TestBed.createComponent(JobPostingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
