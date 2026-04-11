import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogShowcaseComponent } from './blog-showcase.component';

describe('BlogShowcaseComponent', () => {
  let component: BlogShowcaseComponent;
  let fixture: ComponentFixture<BlogShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
