import { Todo } from './../todo-interface/todo';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManageService {
  tasks: Array<Todo> = [];

  constructor() {}

  addTask(task: Todo) {
    this.tasks.push({
      label: task.label,
      completed: task.completed,
    });
    localStorage.setItem('userLocalStorage', JSON.stringify(this.tasks));
  }

  removeTask(task: Todo) {
    const index: number = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    localStorage.setItem('userLocalStorage', JSON.stringify(this.tasks));
  }

  changeTaskStatus(task: Todo) {
    task.completed = !task.completed;
    localStorage.setItem('userLocalStorage', JSON.stringify(this.tasks));
  }

  getTasks() {
    this.tasks = JSON.parse(localStorage.getItem('userLocalStorage')) ?? [];
    return of(this.tasks);
  }
}
