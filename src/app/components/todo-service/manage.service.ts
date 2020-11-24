import { Todo } from './../todo-interface/todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManageService {
  tasks: Array<Todo> = [
    {
      label: 'Kupić prezenty',
      completed: false,
    },
    {
      label: 'Zrobić zakupy',
      completed: false,
    },
    {
      label: 'Wysłać zadanie z todo-listy',
      completed: true,
    },
  ];

  constructor() {}

  addTask(task: Todo) {
    this.tasks.push({
      label: task.label,
      completed: task.completed,
    });
  }

  removeTask(task: Todo) {
    const index: number = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  getTasks() {
    return this.tasks;
  }
}
