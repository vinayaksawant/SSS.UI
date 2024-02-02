import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomListComponent } from './groom-list.component';

describe('GroomListComponent', () => {
  let component: GroomListComponent;
  let fixture: ComponentFixture<GroomListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroomListComponent]
    });
    fixture = TestBed.createComponent(GroomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
