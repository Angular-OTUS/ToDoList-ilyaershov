import { TodoListItem, TodoListItemCreateModel } from '../todo-list-item/todo-list-item.interfaces';

function getMaxItemId(list: TodoListItem[]) {
  if (list.length === 0)
    return 0;
  return Math.max(...list.map(item => item.id)) + 1;
}

export function deleteItem(list: TodoListItem[], itemId: number) : TodoListItem[] {
  return list.filter(item => item.id !== itemId);
}

export function addItem(list: TodoListItem[], createModel: TodoListItemCreateModel) : TodoListItem[] {
  const newItem : TodoListItem = {
    id: getMaxItemId(list),
    ...createModel,
  };

  return [...list, newItem];
}