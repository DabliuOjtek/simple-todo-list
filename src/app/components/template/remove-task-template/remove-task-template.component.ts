import { ManageService } from './../../todo-service/manage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-task-template',
  templateUrl: './remove-task-template.component.html',
  styleUrls: ['./remove-task-template.component.css'],
})
export class RemoveTaskTemplateComponent implements OnInit {
  constructor(private managerService: ManageService) {}

  ngOnInit(): void {}

  onClearTasks() {
    this.managerService.clearTasks();
  }
}
