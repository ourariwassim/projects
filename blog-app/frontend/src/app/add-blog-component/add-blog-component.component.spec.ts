import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogComponentComponent } from './add-blog-component.component';

describe('AddBlogComponentComponent', () => {
  let component: AddBlogComponentComponent;
  let fixture: ComponentFixture<AddBlogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBlogComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
