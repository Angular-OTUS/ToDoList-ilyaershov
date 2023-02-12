import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
    buttonType?: 'add' | 'delete';

  @Input()
    type?: 'submit' | 'reset' | 'button';

  @Input()
    disabled?: boolean = false;

  @Output()
    buttonClick = new EventEmitter();

  get buttonClass() {
    switch (this.buttonType) {
      case 'add':
        return 'button--add';
      case 'delete':
        return 'button--delete';
      default:
        return '';
    }
  }

  onClick = () : void => {
    this.buttonClick.emit();
  };
}
