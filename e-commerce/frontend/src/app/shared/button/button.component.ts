import { Component, Input } from '@angular/core';
import { variant } from '../../core/enum/buttonVariant';
import { NgClass } from '@angular/common';
import { buttonSize } from '../../core/enum/buttonSize';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() variant: variant = 'link';
  @Input() selected = false;
  @Input() size: buttonSize = 'normal';
  default = 'cursor-pointer  duration-300';
  buttonVariant: Record<variant, string> = {
    link: 'hover:scale-105 text-gray-700',
    primary: ' bg-black text-white',
    secondary: 'text-black bg-gray-100',
  };
  buttonSize: Record<buttonSize, string> = {
    normal: 'px-10 h-15 flex items-center',
    small: ' px-3 py-2 flex items-center',
  };

  useClass() {
    if (this.variant != 'link') {
      this.default = [this.buttonSize[this.size], this.default].join(' ');
    }
    return [this.buttonVariant[this.variant], this.default].join(' ');
  }
}
