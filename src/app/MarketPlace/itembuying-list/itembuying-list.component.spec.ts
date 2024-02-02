import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItembuyingListComponent } from './itembuying-list.component';

describe('ItembuyingListComponent', () => {
  let component: ItembuyingListComponent;
  let fixture: ComponentFixture<ItembuyingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItembuyingListComponent]
    });
    fixture = TestBed.createComponent(ItembuyingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
