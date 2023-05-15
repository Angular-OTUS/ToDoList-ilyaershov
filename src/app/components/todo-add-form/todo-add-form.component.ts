import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoListItemCreateModel } from '../todo-list-item/todo-list-item.interfaces';

@Component({
  selector: 'todo-add-form',
  templateUrl: './todo-add-form.component.html',
  styleUrls: ['./todo-add-form.component.scss'],
})
export class TodoAddFormComponent {
  @Output() itemAdded = new EventEmitter<TodoListItemCreateModel>();

  inputText = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  descriptionText = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  get isAddButtonDisabled() {
    return !(this.inputText.valid && this.descriptionText.valid);
  };

  onAdd = () => {
    const { value: todoText } = this.inputText;
    const { value: description } = this.descriptionText;
    const isTodoTextValid = this.inputText.valid && todoText;
    const isDescriptionValid = this.descriptionText.valid && description;
    if (!isTodoTextValid || !isDescriptionValid)
      return;

    this.itemAdded.emit({
      description,
      text: todoText,
    });
    
    this.inputText.reset('');
    this.descriptionText.reset('');
  };
}
