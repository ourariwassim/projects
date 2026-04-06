import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-line',
  imports: [ButtonComponent],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css',
})
export class LineComponent {
  @Input() content: string = '';
  @Output() actionEvent = new EventEmitter<string>();
  action(event: string) {
    this.actionEvent.emit(event);
  }
}
