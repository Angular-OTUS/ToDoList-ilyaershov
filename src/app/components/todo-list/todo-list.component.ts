import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../todo-list-item/todo-list-item.interfaces';
import { addItem, deleteItem } from './todo-list.helpers';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  isLoading = true;

  todoList: TodoListItem[] = [
    {
      id: 0,
      text: 'Пробежать 42км',
    },
    {
      id: 1,
      text: 'Выучить Angular',
    },
    {
      id: 2,
      text: 'Пройти Skyrim полностью',
    },
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  onAdd = (text: string) => {
    if (!text) {
      return;
    }

    this.todoList = addItem(this.todoList, text);
  };

  onDelete = (itemId: number) => {
    this.todoList = deleteItem(this.todoList, itemId);
  };
}
