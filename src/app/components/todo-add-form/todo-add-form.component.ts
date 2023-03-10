import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'todo-add-form',
  templateUrl: './todo-add-form.component.html',
  styleUrls: ['./todo-add-form.component.scss'],
})
export class TodoAddFormComponent {
  @Output() itemAdded = new EventEmitter<string>();

  inputText = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  onAdd = () => {
    const { value } = this.inputText;
    if (!this.inputText.valid || !value)
      return;

    this.itemAdded.emit(value);
    this.inputText.reset('');
  };
}
