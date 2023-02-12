import { TodoListItem } from '../todo-list-item/todo-list-item.interfaces';
import { addItem, deleteItem } from './todo-list.helpers';

describe('TodoListHelpers', () => {
  it('should add todo item to list', () => {
    // Arrange
    const text = 'expectedText';
    const list: TodoListItem[] = [
      {
        id: 1,
        text: 'name',
      },
    ];

    const expectedList: TodoListItem[] = [
      {
        id: 1,
        text: 'name',
      },
      {
        id: 2,
        text: 'expectedText',
      },
    ];

    // Act
    const resultList = addItem(list, text);

    // Assert
    expect(resultList).toEqual(expectedList);
  });

  it('should delete todo item from the middle of the list', () => {
    // Arrange
    const idToDelete = 2;
    let list: TodoListItem[] = [
      {
        id: 1,
        text: 'name',
      },
      {
        id: 2,
        text: 'to delete',
      },
      {
        id: 3,
        text: 'name',
      },
    ];

    const expectedList: TodoListItem[] = [
      {
        id: 1,
        text: 'name',
      },
      {
        id: 3,
        text: 'name',
      },
    ];

    // Act
    list = deleteItem(list, idToDelete);

    // Assert
    expect(list).toEqual(expectedList);
  });

  it('should delete todo item from the start of the list', () => {
    // Arrange
    const idToDelete = 1;
    let list: TodoListItem[] = [
      {
        id: 1,
        text: 'to delete',
      },
      {
        id: 2,
        text: 'name',
      },
      {
        id: 3,
        text: 'name',
      },
    ];

    const expectedList: TodoListItem[] = [
      {
        id: 2,
        text: 'name',
      },
      {
        id: 3,
        text: 'name',
      },
    ];

    // Act
    list = deleteItem(list, idToDelete);

    // Assert
    expect(list).toEqual(expectedList);
  });

  it('should delete todo item from the end of the list', () => {
    // Arrange
    const idToDelete = 3;
    let list: TodoListItem[] = [
      {
        id: 1,
        text: 'name',
      },
      {
        id: 2,
        text: 'name',
      },
      {
        id: 3,
        text: 'to delete',
      },
    ];

    const expectedList: TodoListItem[] = [
      {
        id: 1,
        text: 'name',
      },
      {
        id: 2,
        text: 'name',
      },
    ];

    // Act
    list = deleteItem(list, idToDelete);

    // Assert
    expect(list).toEqual(expectedList);
  });
});