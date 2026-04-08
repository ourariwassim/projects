import { Component, Input } from '@angular/core';
type variant = 'primary' | 'secondary' | 'other' | 'link';
type rounded = 'fully' | 'semi';
type size = 'lg' | 'md' | 'sm';
@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'other' | 'link' = 'primary';
  @Input() rounded: 'fully' | 'semi' = 'fully';
  @Input() size: 'lg' | 'md' | 'sm' = 'md';
  defaultClasses =
    'flex justify-center items-center  cursor-pointer duration-400';

  buttonVariant: Record<variant, string> = {
    primary: ' bg-primary text-white hover:bg-blue-800',
    secondary: ' bg-blue-500 text-white',
    link: 'hover:bg-primary hover:text-white',
    other: ' bg-blue-900 text-white',
  };
  buttonRounded: Record<rounded, string> = {
    fully: 'rounded-full',
    semi: 'rounded-lg',
  };
  buttonSize: Record<size, string> = {
    lg: 'px-15 py-5',
    md: 'px-10 py-3',
    sm: 'px-6 py-2',
  };

  classes() {
    return [
      this.buttonVariant[this.variant],
      this.buttonRounded[this.rounded],
      this.buttonSize[this.size],
      this.defaultClasses,
    ].join(' ');
  }
}
