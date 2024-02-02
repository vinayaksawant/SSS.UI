import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateHomeComponent } from './realestate-home.component';

describe('RealestateHomeComponent', () => {
  let component: RealestateHomeComponent;
  let fixture: ComponentFixture<RealestateHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealestateHomeComponent]
    });
    fixture = TestBed.createComponent(RealestateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
