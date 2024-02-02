import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyforsellleaseComponent } from './propertyforselllease.component';

describe('PropertyforsellleaseComponent', () => {
  let component: PropertyforsellleaseComponent;
  let fixture: ComponentFixture<PropertyforsellleaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyforsellleaseComponent]
    });
    fixture = TestBed.createComponent(PropertyforsellleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
