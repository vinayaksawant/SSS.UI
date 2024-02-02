import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterprisesListComponent } from './enterprises-list.component';

describe('EnterprisesListComponent', () => {
  let component: EnterprisesListComponent;
  let fixture: ComponentFixture<EnterprisesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterprisesListComponent]
    });
    fixture = TestBed.createComponent(EnterprisesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
