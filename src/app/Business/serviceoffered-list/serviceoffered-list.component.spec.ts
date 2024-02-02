import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceofferedListComponent } from './serviceoffered-list.component';

describe('ServiceofferedListComponent', () => {
  let component: ServiceofferedListComponent;
  let fixture: ComponentFixture<ServiceofferedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceofferedListComponent]
    });
    fixture = TestBed.createComponent(ServiceofferedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
