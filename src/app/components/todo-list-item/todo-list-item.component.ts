import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoListItem } from './todo-list-item.interfaces';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() item!: TodoListItem;

  @Output() itemDeleted = new EventEmitter<number>();

  ngOnInit() {
    if (!this.item)
      throw new Error('TodoListItemComponent\'s item property should not be null.');
  }

  onDelete = () => {
    this.itemDeleted.emit(this.item.id);
  };
}
