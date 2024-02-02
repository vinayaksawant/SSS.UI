import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceseekerListComponent } from './serviceseeker-list.component';

describe('ServiceseekerListComponent', () => {
  let component: ServiceseekerListComponent;
  let fixture: ComponentFixture<ServiceseekerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceseekerListComponent]
    });
    fixture = TestBed.createComponent(ServiceseekerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
