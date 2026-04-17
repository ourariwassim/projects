import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-titles',
  imports: [],
  templateUrl: './section-titles.component.html',
  styleUrl: './section-titles.component.css',
})
export class SectionTitlesComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
