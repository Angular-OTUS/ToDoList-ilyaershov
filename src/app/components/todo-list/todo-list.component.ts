import { Component, OnInit } from '@angular/core';
import { TodoListItem, TodoListItemCreateModel } from '../todo-list-item/todo-list-item.interfaces';
import { addItem, deleteItem } from './todo-list.helpers';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  isLoading = true;

  selectedItemId = -1;

  todoList: TodoListItem[] = [
    {
      id: 0,
      text: 'Пробежать 42км',
      description: 'Надо много бегать',
    },
    {
      id: 1,
      text: 'Выучить Angular',
      description: 'Иначе без работы останешься',
    },
    {
      id: 2,
      text: 'Пройти Skyrim полностью',
      description: 'Не, это точно перебор',
    },
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  onAdd = (createModel: TodoListItemCreateModel) => {
    if (!createModel) {
      return;
    }

    this.todoList = addItem(this.todoList, createModel);
  };

  onSelect = (id: number) => {
    this.selectedItemId = id;
  };

  onDelete = (itemId: number) => {
    this.todoList = deleteItem(this.todoList, itemId);
  };
}
