import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsellingListComponent } from './itemselling-list.component';

describe('ItemsellingListComponent', () => {
  let component: ItemsellingListComponent;
  let fixture: ComponentFixture<ItemsellingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsellingListComponent]
    });
    fixture = TestBed.createComponent(ItemsellingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
