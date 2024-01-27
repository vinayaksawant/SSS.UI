import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerHomeComponent } from './career-home.component';

describe('CareerHomeComponent', () => {
  let component: CareerHomeComponent;
  let fixture: ComponentFixture<CareerHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerHomeComponent]
    });
    fixture = TestBed.createComponent(CareerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
