import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyforbuyrentListComponent } from './propertyforbuyrent-list.component';

describe('PropertyforbuyrentListComponent', () => {
  let component: PropertyforbuyrentListComponent;
  let fixture: ComponentFixture<PropertyforbuyrentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyforbuyrentListComponent]
    });
    fixture = TestBed.createComponent(PropertyforbuyrentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
