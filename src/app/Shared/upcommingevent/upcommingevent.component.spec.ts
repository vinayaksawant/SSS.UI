import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingeventComponent } from './upcommingevent.component';

describe('UpcommingeventComponent', () => {
  let component: UpcommingeventComponent;
  let fixture: ComponentFixture<UpcommingeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcommingeventComponent]
    });
    fixture = TestBed.createComponent(UpcommingeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
