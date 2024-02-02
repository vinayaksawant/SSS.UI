import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialserviceComponent } from './socialservice.component';

describe('SocialserviceComponent', () => {
  let component: SocialserviceComponent;
  let fixture: ComponentFixture<SocialserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialserviceComponent]
    });
    fixture = TestBed.createComponent(SocialserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
