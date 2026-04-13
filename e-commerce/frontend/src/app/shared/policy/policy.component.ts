import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-policy',
  imports: [],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.css',
})
export class PolicyComponent {
  @Input() image = '';
  @Input() title = '';
  @Input() description = '';
}
