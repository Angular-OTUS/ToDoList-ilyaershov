import { Component } from '@angular/core';
import { TodoListItem } from '../todo-list-item/todo-list-item.interfaces';
import { addItem, deleteItem } from './todo-list.helpers';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todoList: TodoListItem[] = [
    {
      id: 0,
      text: 'Пробежать 42км'
    },
    {
      id: 1,
      text: 'Выучить Angular'
    },
    {
      id: 2,
      text: 'Пройти Skyrim полностью'
    }
  ];

  onAdd = (text: string) => {
    if (!text) {
      return;
    }

    this.todoList = addItem(this.todoList, text);
  }

  onDelete = (itemId: number) => {
    this.todoList = deleteItem(this.todoList, itemId)
  }
}
