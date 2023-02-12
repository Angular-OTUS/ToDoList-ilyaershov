import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddFormComponent } from './todo-add-form.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../modules/shared/shared.module';

describe('TodoAddFormComponent', () => {
  let component: TodoAddFormComponent;
  let fixture: ComponentFixture<TodoAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodoAddFormComponent,
      ],
      imports: [
        FormsModule,
        NoopAnimationsModule,
        MatInputModule,
        ReactiveFormsModule,
        SharedModule,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodoAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit itemAdded when add button is clicked', () => {
    // Arrange
    const expectedValue = 'valid value';
    const emitMock = spyOn(component.itemAdded, 'emit');
    const compiled = fixture.nativeElement as HTMLElement;
    const addButton = compiled.querySelector('.button.button--add') as HTMLButtonElement;
    component.inputText.setValue(expectedValue);
    fixture.detectChanges();

    // Act
    addButton.click();

    // Assert
    expect(emitMock).toHaveBeenCalledOnceWith(expectedValue);
    expect(component.inputText.value).toEqual('');
  });

  it('should not emit itemAdded and mark input with minlength validator when add button is clicked', () => {
    // Arrange
    const emitMock = spyOn(component.itemAdded, 'emit');
    const compiled = fixture.nativeElement as HTMLElement;
    const addButton = compiled.querySelector('.button.button--add') as HTMLButtonElement;
    component.inputText.setValue('12');
    fixture.detectChanges();

    // Act
    addButton.click();

    // Assert
    expect(addButton.disabled).toEqual(true);
    expect(emitMock).toHaveBeenCalledTimes(0);
    expect(component.inputText.valid).toEqual(false);
    expect(component.inputText.getError('required')).toEqual(undefined);
    expect(component.inputText.getError('minlength')).toEqual({ requiredLength: 3, actualLength: 2 });
  });

  it('should not emit itemAdded and mark input with required validator when add button is clicked', () => {
    // Arrange
    const emitMock = spyOn(component.itemAdded, 'emit');
    const compiled = fixture.nativeElement as HTMLElement;
    const addButton = compiled.querySelector('.button.button--add') as HTMLButtonElement;
    component.inputText.setValue('');
    fixture.detectChanges();

    // Act
    addButton.click();

    // Assert
    expect(addButton.disabled).toEqual(true);
    expect(emitMock).toHaveBeenCalledTimes(0);
    expect(component.inputText.valid).toEqual(false);
    expect(component.inputText.getError('required')).toEqual(true);
    expect(component.inputText.getError('minlength')).toEqual(undefined);
  });
});
