import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceofferedComponent } from './serviceoffered.component';

describe('ServiceofferedComponent', () => {
  let component: ServiceofferedComponent;
  let fixture: ComponentFixture<ServiceofferedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceofferedComponent]
    });
    fixture = TestBed.createComponent(ServiceofferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
