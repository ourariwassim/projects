import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTitlesComponent } from './section-titles.component';

describe('SectionTitlesComponent', () => {
  let component: SectionTitlesComponent;
  let fixture: ComponentFixture<SectionTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTitlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
