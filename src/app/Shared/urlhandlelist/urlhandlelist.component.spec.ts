import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlhandlelistComponent } from './urlhandlelist.component';

describe('UrlhandlelistComponent', () => {
  let component: UrlhandlelistComponent;
  let fixture: ComponentFixture<UrlhandlelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlhandlelistComponent]
    });
    fixture = TestBed.createComponent(UrlhandlelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
