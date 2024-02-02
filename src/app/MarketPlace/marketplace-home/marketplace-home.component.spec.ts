import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceHomeComponent } from './marketplace-home.component';

describe('MarketplaceHomeComponent', () => {
  let component: MarketplaceHomeComponent;
  let fixture: ComponentFixture<MarketplaceHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketplaceHomeComponent]
    });
    fixture = TestBed.createComponent(MarketplaceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
