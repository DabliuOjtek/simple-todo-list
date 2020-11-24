import { Todo } from './../../todo-interface/todo';
import { ManageService } from './../../todo-service/manage.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-template',
  templateUrl: './task-template.component.html',
  styleUrls: ['./task-template.component.css'],
})
export class TaskTemplateComponent implements OnInit {
  @Input() task: Todo;

  constructor(private manageService: ManageService) {}

  ngOnInit(): void {}

  changeTaskStatus() {
    this.task.completed = !this.task.completed;
  }

  removeTask(task: Todo) {
    this.manageService.removeTask(task);
  }
}
