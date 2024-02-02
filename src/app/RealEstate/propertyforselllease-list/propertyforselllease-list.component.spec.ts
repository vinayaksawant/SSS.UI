import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyforsellleaseListComponent } from './propertyforselllease-list.component';

describe('PropertyforsellleaseListComponent', () => {
  let component: PropertyforsellleaseListComponent;
  let fixture: ComponentFixture<PropertyforsellleaseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyforsellleaseListComponent]
    });
    fixture = TestBed.createComponent(PropertyforsellleaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
