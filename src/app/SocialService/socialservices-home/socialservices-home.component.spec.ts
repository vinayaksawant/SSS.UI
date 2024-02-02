import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialservicesHomeComponent } from './socialservices-home.component';

describe('SocialservicesHomeComponent', () => {
  let component: SocialservicesHomeComponent;
  let fixture: ComponentFixture<SocialservicesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialservicesHomeComponent]
    });
    fixture = TestBed.createComponent(SocialservicesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
