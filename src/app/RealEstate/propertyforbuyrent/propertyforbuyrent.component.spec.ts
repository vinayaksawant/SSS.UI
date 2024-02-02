import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyforbuyrentComponent } from './propertyforbuyrent.component';

describe('PropertyforbuyrentComponent', () => {
  let component: PropertyforbuyrentComponent;
  let fixture: ComponentFixture<PropertyforbuyrentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyforbuyrentComponent]
    });
    fixture = TestBed.createComponent(PropertyforbuyrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
