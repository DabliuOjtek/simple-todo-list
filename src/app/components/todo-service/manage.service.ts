import { Todo } from './../todo-interface/todo';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManageService {
  tasks: Array<Todo> = [];
  userLocalStorage = 'userLocalStorage';

  constructor() {}

  addTask(task: Todo) {
    this.tasks.push({
      label: task.label,
      completed: task.completed,
    });
    this.setLocalStorage(this.userLocalStorage);
  }

  removeTask(task: Todo) {
    const index: number = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    this.setLocalStorage(this.userLocalStorage);
  }

  changeTaskStatus(task: Todo) {
    task.completed = !task.completed;
    this.setLocalStorage(this.userLocalStorage);
  }

  clearTasks() {
    this.tasks.splice(0, this.tasks.length);
    this.setLocalStorage(this.userLocalStorage);
  }

  getTasks() {
    this.tasks = this.getLocalStorage(this.userLocalStorage);
    return of(this.tasks);
  }

  setLocalStorage(item: string) {
    localStorage.setItem(item, JSON.stringify(this.tasks));
  }

  getLocalStorage(item: string) {
    return JSON.parse(localStorage.getItem('userLocalStorage')) ?? [];
  }
}
