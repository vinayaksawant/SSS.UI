import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceseekerComponent } from './serviceseeker.component';

describe('ServiceseekerComponent', () => {
  let component: ServiceseekerComponent;
  let fixture: ComponentFixture<ServiceseekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceseekerComponent]
    });
    fixture = TestBed.createComponent(ServiceseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
