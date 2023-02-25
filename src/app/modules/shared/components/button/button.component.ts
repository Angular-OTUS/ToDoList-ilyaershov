import { Component, Input } from '@angular/core';
import { ButtonColor, ButtonType } from './button.types';

@Component({
  selector: 'todo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() color?: ButtonColor;

  @Input() type?: ButtonType;

  @Input() disabled?: boolean = false;

  get buttonClass() {
    switch (this.color) {
      case 'red':
        return 'button--red';
      case 'green':
        return 'button--green';
      default:
        return '';
    }
  }
}
