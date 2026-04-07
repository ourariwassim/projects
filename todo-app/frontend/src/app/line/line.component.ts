import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-line',
  imports: [ButtonComponent, FormsModule],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css',
})
export class LineComponent {
  @Output() saved = new EventEmitter<string>();
  @Input() EditActivated = true;
  @Input() content: string = '';
  @Output() actionEvent = new EventEmitter<string>();
  action(event: string) {
    if (event == 'Save') {
      console.log(this.content);
      this.saved.emit(this.content);
    }
    this.actionEvent.emit(event);
  }
  test() {
    console.log('hi');
  }
}
