import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Output() ActionEvent = new EventEmitter<string>();
  @Input() action: string = '';
  emitAction() {
    this.ActionEvent.emit(this.action);
  }
}
