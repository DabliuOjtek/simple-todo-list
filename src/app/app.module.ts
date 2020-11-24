import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TaskTemplateComponent } from './components/template/task-template/task-template.component';
import { NewTaskTemplateComponent } from './components/template/new-task-template/new-task-template.component';
import { TodoHeaderComponent } from './components/template/todo-header/todo-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskTemplateComponent,
    NewTaskTemplateComponent,
    TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
