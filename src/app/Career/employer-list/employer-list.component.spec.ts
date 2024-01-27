import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerListComponent } from './employer-list.component';

describe('EmployerListComponent', () => {
  let component: EmployerListComponent;
  let fixture: ComponentFixture<EmployerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerListComponent]
    });
    fixture = TestBed.createComponent(EmployerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
