import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo-interface/todo';
import { ManageService } from '../../todo-service/manage.service';

@Component({
  selector: 'app-new-task-template',
  templateUrl: './new-task-template.component.html',
  styleUrls: ['./new-task-template.component.css'],
})
export class NewTaskTemplateComponent implements OnInit {
  task: Todo = {
    label: '',
    completed: false,
    date: 0,
  };

  constructor(private manageService: ManageService) {}

  ngOnInit(): void {}

  onAddTask() {
    if (this.task.label !== '') {
      this.manageService.addTask(this.task);
      this.task.label = '';
    }
  }
}
