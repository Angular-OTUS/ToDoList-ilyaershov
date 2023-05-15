import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../modules/shared/shared.module';

import { TodoListItemComponent } from './todo-list-item.component';
import { TodoListItem } from './todo-list-item.interfaces';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;
  const todoItem: TodoListItem = {
    id: 1,
    text: 'text',
    description: 'description',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListItemComponent ],
      imports: [
        SharedModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    component.item = todoItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send itemDeleted event after delete button is clicked', () => {
    // Arrange
    const emitMock = spyOn(component.itemDeleted, 'emit');
    const compiled = fixture.nativeElement as HTMLElement;
    const deleteButton = compiled.querySelector('button.button.button--red') as HTMLButtonElement;

    // Act
    deleteButton.click();

    // Assert
    expect(emitMock).toHaveBeenCalledTimes(1);
  });
});
