import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingeventListComponent } from './upcommingevent-list.component';

describe('UpcommingeventListComponent', () => {
  let component: UpcommingeventListComponent;
  let fixture: ComponentFixture<UpcommingeventListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcommingeventListComponent]
    });
    fixture = TestBed.createComponent(UpcommingeventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
