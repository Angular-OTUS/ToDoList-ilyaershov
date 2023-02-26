import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import * as Components from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from './modules/shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        Components.TodoListComponent,
        Components.TodoListItemComponent,
        Components.TodoAddFormComponent,
      ],
      imports: [
        FormsModule,
        NoopAnimationsModule,
        MatInputModule,
        ReactiveFormsModule,
        SharedModule,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should have as title \'todo-list\'', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.title).toEqual('todo-list');
  });
});
