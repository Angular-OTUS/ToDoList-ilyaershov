import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from './modules/shared/shared.module';

import { AppComponent } from './app.component';
import * as Components from './components';

@NgModule({
  declarations: [
    AppComponent,
    Components.TodoAddFormComponent,
    Components.TodoListComponent,
    Components.TodoListItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
