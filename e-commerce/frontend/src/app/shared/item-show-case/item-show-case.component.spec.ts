import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShowCaseComponent } from './item-show-case.component';

describe('ItemShowCaseComponent', () => {
  let component: ItemShowCaseComponent;
  let fixture: ComponentFixture<ItemShowCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemShowCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemShowCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
