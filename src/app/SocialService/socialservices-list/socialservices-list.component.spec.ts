import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialservicesListComponent } from './socialservices-list.component';

describe('SocialservicesListComponent', () => {
  let component: SocialservicesListComponent;
  let fixture: ComponentFixture<SocialservicesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialservicesListComponent]
    });
    fixture = TestBed.createComponent(SocialservicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
